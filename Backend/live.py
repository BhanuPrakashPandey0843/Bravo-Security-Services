import streamlit as st
import numpy as np
from PIL import Image
from ultralytics import YOLO
import cv2
import easyocr
import pandas as pd
from util import set_background, write_csv
import uuid
import os
import json
from datetime import datetime
from pymongo import MongoClient
from concurrent.futures import ThreadPoolExecutor

# Set background
set_background("./imgs/background.png")

# Folder path for saving detected images
folder_path = "./licenses_plates_imgs_detected/"
LICENSE_MODEL_DETECTION_DIR = './models/license_plate_detector.pt'
COCO_MODEL_DIR = "./models/yolov8n.pt"

# Initialize EasyOCR reader
reader = easyocr.Reader(['en'], gpu=False)

# Initialize YOLO models
coco_model = YOLO(COCO_MODEL_DIR)
license_plate_detector = YOLO(LICENSE_MODEL_DETECTION_DIR)

# MongoDB connection setup
client = MongoClient("mongodb://localhost:27017/")
db = client["license_plate_db"]
collection = db["detections"]

# Initialize Streamlit containers and state
header = st.container()
body = st.container()

threshold = 0.15
state = "Uploader"

if "state" not in st.session_state:
    st.session_state["state"] = "Uploader"

# Function to read license plate using EasyOCR
def read_license_plate(license_plate_crop):
    detections = reader.readtext(license_plate_crop)
    if not detections:
        return None, None

    plate_texts = []
    scores = 0
    for result in detections:
        text = result[1].upper()
        plate_texts.append(text)
        scores += result[2]

    if plate_texts:
        return " ".join(plate_texts), scores / len(plate_texts)
    return None, None

# Function to save detection results
def save_detection(image, text):
    try:
        # Create folder if it does not exist
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)

        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{folder_path}{text}_{timestamp}.jpg"

        # Save image
        cv2.imwrite(filename, image)
        st.write(f"Image saved at {filename}")

        detection_data = {
            "text": text,
            "timestamp": timestamp,
            "filename": filename
        }

        # Save detection data to JSON
        json_path = "./json_detections/detection_results.json"
        if not os.path.exists(os.path.dirname(json_path)):
            os.makedirs(os.path.dirname(json_path))

        if os.path.exists(json_path):
            if os.path.getsize(json_path) > 0:
                with open(json_path, 'r') as f:
                    data = json.load(f)
            else:
                data = []
        else:
            data = []

        data.append(detection_data)
        with open(json_path, 'w') as f:
            json.dump(data, f, indent=4)
        st.write(f"Data saved to JSON at {json_path}")

        # Save detection data to MongoDB
        collection.insert_one(detection_data)
        st.write(f"Data saved to MongoDB: {detection_data}")

    except Exception as e:
        st.write(f"Error saving detection: {e}")

# Use ThreadPoolExecutor for asynchronous saving
executor = ThreadPoolExecutor(max_workers=5)

# Function to make predictions on an image
def model_prediction(image):
    license_detections = license_plate_detector(image)[0]

    prediction_image = image.copy()
    texts = []
    license_plate_crops = []

    for license_plate in license_detections.boxes.data.tolist():
        x1, y1, x2, y2, score, class_id = license_plate
        cv2.rectangle(prediction_image, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 3)
        license_plate_crop = image[int(y1):int(y2), int(x1):int(x2), :]
        license_plate_crop_gray = cv2.cvtColor(license_plate_crop, cv2.COLOR_BGR2GRAY)
        license_plate_text, license_plate_text_score = read_license_plate(license_plate_crop_gray)
        if license_plate_text:
            texts.append(license_plate_text)
            license_plate_crops.append(license_plate_crop)
    
    return prediction_image, texts, license_plate_crops

# Functions to change state
def change_state_live():
    st.session_state["state"] = "Live"

# Function for live detection
def live_detection():
    cap = cv2.VideoCapture(0)
    stframe = st.empty()
    save_button = st.button("Save Detection")

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        img_to_an = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        license_detections = license_plate_detector(img_to_an)[0]

        for license_plate in license_detections.boxes.data.tolist():
            x1, y1, x2, y2, score, class_id = license_plate
            cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 3)
            license_plate_crop = frame[int(y1):int(y2), int(x1):int(x2), :]
            license_plate_crop_gray = cv2.cvtColor(license_plate_crop, cv2.COLOR_BGR2GRAY)
            license_plate_text, license_plate_text_score = read_license_plate(license_plate_crop_gray)
            if license_plate_text:
                cv2.rectangle(frame, (int(x1) - 40, int(y1) - 40), (int(x2) + 40, int(y1)), (255, 255, 255), cv2.FILLED)
                cv2.putText(frame, str(license_plate_text), (int((int(x1) + int(x2)) / 2) - 70, int(y1) - 10),
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 0), 3)
                if save_button:
                    executor.submit(save_detection, license_plate_crop, license_plate_text)

        stframe.image(frame, channels="BGR")

    cap.release()
    cv2.destroyAllWindows()

# Streamlit UI setup
with header:
    _, col1, _ = st.columns([0.2, 1, 0.1])
    col1.title("💥 License Car Plate Detection 🚗")

    _, col0, _ = st.columns([0.15, 1, 0.1])
    col0.image("./imgs/test_background.jpg", width=500)

    _, col4, _ = st.columns([0.1, 1, 0.2])
    col4.subheader("Computer Vision Detection with YoloV8 🧪")

    _, col, _ = st.columns([0.3, 1, 0.1])
    col.image("./imgs/plate_test.jpg")

    _, col5, _ = st.columns([0.05, 1, 0.1])

    st.write("The different models detect the car and the license plate in a given image, then extracts the info about the license using EasyOCR, and crop and save the license plate as an Image, with a CSV file with all the data.")

with body:
    _, col1, _ = st.columns([0.1, 1, 0.2])
    col1.subheader("Check It-out the License Car Plate Detection Model 🔎!")

    _, colb1, colb2, colb3 = st.columns([0.2, 0.7, 0.6, 1])

    if colb3.button("Live Detection", on_click=change_state_live):
        pass

    if st.session_state["state"] == "Uploader":
        img = st.file_uploader("Upload a Car Image: ", type=["png", "jpg", "jpeg"])
    elif st.session_state["state"] == "Camera":
        img = st.camera_input("Take a Photo: ")
    elif st.session_state["state"] == "Live":
        live_detection()
        img = None

    _, col2, _ = st.columns([0.3, 1, 0.2])

    _, col5, _ = st.columns([0.8, 1, 0.2])

    if img is not None:
        image = np.array(Image.open(img))
        col2.image(image, width=400)

        if col5.button("Apply Detection"):
            results = model_prediction(image)

            if len(results) == 3:
                prediction, texts, license_plate_crop = results[0], results[1], results[2]

                texts = [i for i in texts if i is not None]

                if len(texts) == 1 and len(license_plate_crop):
                    _, col3, _ = st.columns([0.4, 1, 0.2])
                    col3.header("Detection Results ✅:")

                    _, col4, _ = st.columns([0.1, 1, 0.1])
                    col4.image(prediction)

                    _, col9, _ = st.columns([0.4, 1, 0.2])
                    col9.header("License Cropped ✅:")

                    _, col10, _ = st.columns([0.3, 1, 0.1])
                    col10.image(license_plate_crop[0], width=350)

                    _, col11, _ = st.columns([0.45, 1, 0.55])
                    col11.success(f"License Number: {texts[0]}")

                    df = pd.read_csv(f"./csv_detections/detection_results.csv")
                    st.dataframe(df)

                elif len(texts) > 1 and len(license_plate_crop) > 1:
                    _, col3, _ = st.columns([0.4, 1, 0.2])
                    col3.header("Detection Results ✅:")

                    _, col4, _ = st.columns([0.1, 1, 0.1])
                    col4.image(prediction)

                    _, col9, _ = st.columns([0.4, 1, 0.2])
                    col9.header("License Cropped ✅:")

                    _, col10, _ = st.columns([0.3, 1, 0.1])

                    _, col11, _ = st.columns([0.45, 1, 0.55])

                    col7, col8 = st.columns([1, 1])
                    for i in range(len(license_plate_crop)):
                        col10.image(license_plate_crop[i], width=350)
                        col11.success(f"License Number {i}: {texts[i]}")

                   

# Streamlit app entry point
if __name__ == "__main__":
    pass
