import easyocr
import base64
import streamlit as st
import cv2
import numpy as np

def set_background(image_file):
    """
    Sets the background of a Streamlit app to an image specified by the given image file.

    Parameters:
        image_file (str): The path to the image file to be used as the background.
    """
    with open(image_file, "rb") as f:
        img_data = f.read()
    b64_encoded = base64.b64encode(img_data).decode()
    style = f"""
        <style>
        .stApp {{
            background-image: url(data:image/png;base64,{b64_encoded});
            background-size: cover;
        }}
        </style>
    """
    st.markdown(style, unsafe_allow_html=True)

# Initialize the OCR reader
reader = easyocr.Reader(['en'], gpu=False)

# Mapping dictionaries for character conversion
dict_char_to_int = {'O': '0', 'I': '1', 'J': '3', 'A': '4', 'G': '6', 'S': '5'}
dict_int_to_char = {'0': 'O', '1': 'I', '3': 'J', '4': 'A', '6': 'G', '5': 'S'}
states = ['AP', 'AR', 'AS', 'BR', 'CG', 'GA',
          'GJ', 'HR', 'HP', 'JH', 'KA', 'KL',
          'MP', 'MH', 'MN', 'ML', 'MZ', 'NL',
          'OD', 'PB', 'RJ', 'SK', 'TN', 'TS',
          'TR', 'UP', 'UK', 'WB', 'AN', 'CH',
          'DD', 'DL', 'JK', 'LA', 'LD', 'PY']

def write_csv(results, output_path):
    """
    Write the results to a CSV file.

    Args:
        results (dict): Dictionary containing the results.
        output_path (str): Path to the output CSV file.
    """
    with open(output_path, 'w') as f:
        f.write('{},{},{},{},{},{},{}\n'.format('frame_nmr', 'car_id', 'car_bbox', 'license_plate_bbox', 'license_plate_bbox_score', 'license_number', 'license_number_score'))

        for frame_nmr, frame_data in results.items():
            for car_id, car_data in frame_data.items():
                if 'car' in car_data and 'license_plate' in car_data and 'text' in car_data['license_plate']:
                    f.write('{},{},{},{},{},{},{}\n'.format(
                        frame_nmr,
                        car_id,
                        '[{} {} {} {}]'.format(*car_data['car']['bbox']),
                        '[{} {} {} {}]'.format(*car_data['license_plate']['bbox']),
                        car_data['license_plate']['bbox_score'],
                        car_data['license_plate']['text'],
                        car_data['license_plate']['text_score']
                    ))

def preprocess_image(img):
    """
    Preprocess the image to enhance OCR accuracy.

    Args:
        img (numpy.ndarray): The input image.

    Returns:
        numpy.ndarray: The preprocessed image.
    """
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.bilateralFilter(gray, 11, 17, 17)
    _, binary = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return binary

def postprocess_text(text):
    """
    Post-process the OCR text to correct common misreads.

    Args:
        text (str): The OCR text.

    Returns:
        str: The corrected text.
    """
    text = text.strip().upper()
    corrected_text = ''.join(dict_char_to_int.get(char, char) for char in text)
    return corrected_text

import json

def write_json(results, output_path):
    """
    Write the results to a JSON file.

    Args:
        results (dict): Dictionary containing the results.
        output_path (str): Path to the output JSON file.
    """
    json_data = []

    for frame_nmr, frame_data in results.items():
        for car_id, car_data in frame_data.items():
            if 'car' in car_data and 'license_plate' in car_data and 'text' in car_data['license_plate']:
                entry = {
                    'frame_nmr': frame_nmr,
                    'car_id': car_id,
                    'car_bbox': car_data['car']['bbox'],
                    'license_plate_bbox': car_data['license_plate']['bbox'],
                    'license_plate_bbox_score': car_data['license_plate']['bbox_score'],
                    'license_number': car_data['license_plate']['text'],
                    'license_number_score': car_data['license_plate']['text_score']
                }
                json_data.append(entry)

    with open(output_path, 'w') as f:
        json.dump(json_data, f, indent=4)



def read_license_plate(license_plate_crop):
    """
    Read the license plate text from the given cropped image.

    Args:
        license_plate_crop (numpy.ndarray): Cropped image containing the license plate.

    Returns:
        tuple: Tuple containing the formatted license plate text and its confidence score.
    """
    license_plate_crop = preprocess_image(license_plate_crop)
    detections = reader.readtext(license_plate_crop)
    
    if not detections:
        return None, None  # Return if no detections are found

    for detection in detections:
        bbox, text, score = detection
        text = postprocess_text(text)
        
        if text and score:
            return text, score  # Return the first valid detection

    return None, None  # Fallback if no valid text and score found
