import React from 'react'
import icon1 from './icon1.png'
import icon3 from './icon3.png'
import icon2 from './icon2.png'
function Manual() {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16 font-customFont ">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 ">How it Works</h1>
                    
                </div>
                
            </div>
            <div className="w-full px-10 pt-10 font-customFont ">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-0 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 transition-transform transform hover:scale-105">
                            <div className="rounded overflow-hidden shadow-lg bg-white h-64 ">
                                < div className="absolute -mt-20 w-full flex ">
                                <img src={icon1} alt=" " className='mt-24 h-12 pl-7 pt-3 pr-1'/>
                                <p className='text-black text-3xl bold mt-28 pl-1'>Upload Image</p>
                                
                                </div>
                                <div className='flex justify-center items-center px-6'>
                                <p className='text-gray-400 text-base mt-24'>
                                Upload mode is used when the other modes aren't working or there's a problem, the user can provide a photograph of the vehicle on real time.
                                <br/><br/>
                                <a href="http://localhost:8501/" target="_blank" rel="noopener noreferrer">
                                <button
                    type="button"
                    className="inline-block bg-tertiary px-8 py-2 align-center text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition-transform duration-150 ease-in-out hover:bg-primary-accent-300 hover:scale-110 focus:bg-primary-accent-300 focus:scale-110 focus:outline-none focus:ring-0 active:bg-primary-600 active:scale-110 rounded-full"
                  >Upload</button></a>
                                </p>
                                </div>
                                </div>
                                </div>
                                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-0 mb-32 sm:mb-24  xl:max-w-sm lg:w-2/5  transition-transform transform hover:scale-105">
                            <div className="rounded overflow-hidden shadow-lg bg-white  h-64 ">
                                <div className="absolute -mt-20 w-full flex ">
                                <img src={icon2} alt=" " className='mt-24 h-12 pl-7 pt-3 pr-1'/>
                                <p className='text-black text-3xl bold mt-28 pl-1'>Live Upload</p>
                                </div>
                                <div className='flex justify-center items-center px-6'>
                                <p className='text-gray-400 text-base mt-24'>
                                When live mode is enabled, data is captured in real time and stored in the database for immediate analysis and reporting.<br/><br/>
                                <a href="http://localhost:8502/" target="_blank" rel="noopener noreferrer">
                                <button
                    type="button"
                    className="inline-block bg-tertiary px-8 py-2 align-center text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition-transform duration-150 ease-in-out hover:bg-primary-accent-300 hover:scale-110 focus:bg-primary-accent-300 focus:scale-110 focus:outline-none focus:ring-0 active:bg-primary-600 active:scale-110 rounded-full"
                  >
                    Live
                  </button></a>
                                </p>
                                </div>
                                </div>
                                </div>
                                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-0 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 transition-transform transform hover:scale-105">
                            <div className="rounded overflow-hidden shadow-lg bg-white h-64 ">
                                <div className="absolute -mt-20 w-full flex ">
                                <img src={icon3} alt=" " className='mt-24 h-12 pl-7 pt-3 pr-1'/>
                                <p className='text-black text-3xl bold mt-28 pl-1'>Click Image</p>
                                </div>
                                <div className='flex justify-center items-center px-6'>
                                <p className='text-gray-400 text-base mt-24 '>
                                The purpose of the camera mode is to enable manual detection using the phone's camera in the event that the live mode is unavailable. 
                                <br/><br/>
                                <a href="http://localhost:8503/" target="_blank" rel="noopener noreferrer">
                                <button
                    type="button"
                    className="inline-block bg-tertiary px-8 py-2 align-center text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition-transform duration-150 ease-in-out hover:bg-primary-accent-300 hover:scale-110 focus:bg-primary-accent-300 focus:scale-110 focus:outline-none focus:ring-0 active:bg-primary-600 active:scale-110 rounded-full"
                  >Camera</button></a>
                                </p>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
    </div>
  )
}

export default Manual
