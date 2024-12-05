import React from 'react'

function Parking() {
  return (
    <div className="
     bg-white lg:mt-20 lg:mb-20 sm:flex mt-10 justify-center items-center font-customFont" >
        {/*image section */}
        
        <div className="container lg:pb-0 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-0 mt-0">
            <div className="order-1 sm:order-1  ">
            <img src="https://static.wixstatic.com/media/1fdcb7_183d4a14d9fb45aa80a66a12b4d10ff4~mv2.gif" alt=" " className='border rounded-2xl'/>
        </div>
        <div className="order-2 sm:order-2 sm:pt-10 ">
            <p className='text-black text-4xl font-bold lg:px-20 mt-5 mx-5'>
            Effortlessly monitor and manage vehicles with our innovative ANPR system.
            </p>
            <p className='text-gray-400 text-base font-bold align-top lg:px-20 lg:py-5 mt-5 mb-5 mx-5'>An Automatic Number Plate Recognition (ANPR) system is a sophisticated technology designed to read and interpret vehicle license plates with unparalleled accuracy. By leveraging advanced image processing algorithms and high-resolution cameras, our ANPR system effortlessly captures and analyzes number plates in real time, ensuring seamless vehicle identification and tracking. </p>
        </div>

            </div>
                   
</div>
                </div>            
  )
}

export default Parking
