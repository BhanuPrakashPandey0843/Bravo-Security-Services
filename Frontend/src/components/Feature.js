import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function Feature() {
  return (
    <div className="relative overflow-hidden 
     bg-white flex justify-center items-center  mb-8 " >
        <div className="container pb-0 sm:pb-0">
            <div className='lg:mt-0 '>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:pt-0 lg:mt-0 ">
                {/* text area section*/ }
            <div className="flex flex-col mt-10 mx-4 justify-start 
                    gap-4 pt-0 sm:pt-10 text-start sm:text-left
                    order-2 sm:order-1 relative z-10 font-customFont display-inline">
                    <p className='text-primary text-sm font-bold '>WHAT DO I DO?</p>
                    <h1 className="mb-5 text-4xl md:text-5xl text-black font-bold tracking-px-n leading-tight">
                    ANPR that captures the image of vehicles and recognizes their license number.
                    </h1>
                    <p className='text-gray-400 text-base font-bold align-top'>This a robust vehicle automatic number plate recognition system using YOLOv8, Easy OCR, and Tesseract OCR. Integrated seamlessly with RESTful APIs and a responsive web application using React.js and Tailwind CSS adhering to UX/UI design principles for intuitive data management using MongoDB. </p>
                    <ul className='text-gray-400 text-base font-bold align-top display-inline'><li className='flex display-inline'><FaCircleCheck className='text-primary display-inline my-1'/> &nbsp;Real-time Detection and instant Data Display.</li><br/>
                    <li className='flex display-inline'><FaCircleCheck className='text-primary display-inline my-1'/> &nbsp;Camera Detection and storage.</li><br/>
                    <li className='flex display-inline'><FaCircleCheck className='text-primary display-inline my-1'/> &nbsp;Upload Images from device.</li><br/>
                    <li className='flex display-inline'><FaCircleCheck className='text-primary display-inline my-1'/> &nbsp;Automatic storage of Data to MongoDB.</li></ul>
                    <div className='flex inline-block '>
                    <button
                    type="button"
                    className="  bg-primary mx-5 px-10 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3
                     transition-transform duration-150 ease-in-out hover:bg-primary-accent-300 hover:scale-110 focus:bg-primary-accent-300 focus:scale-110 
                     focus:outline-none focus:ring-0 active:bg-primary-600 active:scale-110 rounded-full "
                  >
                    Get Leads <FaArrowRightLong className="px-1 size-5 py-0.5 inline"/>
                  </button>
                  <button
                    type="button"
                    className="inline-block  bg-secondary border-2 border-primary px-10 py-2.5 text-xs font-medium uppercase leading-normal text-primary shadow-primary-3
                     transition-transform duration-150 ease-in-out hover:bg-primary-accent-300 hover:scale-110 focus:bg-primary-accent-300 focus:scale-110 
                     focus:outline-none focus:ring-0 active:bg-primary-600 active:scale-110 rounded-full "
                  >
                    Get Leads
                  </button>
                  </div>
                    </div>
                    <div className="order-1 sm:order-2 relative top-[15%]">
                        <img src="https://www.cohesiveglobal.com/images/ip-camera/lpr/1.gif" alt="jassi" className='border rounded-xl'/>
                    </div>
            </div>
            </div>
           
        </div>

    </div>
  )
}

export default Feature
