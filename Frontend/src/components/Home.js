import React, { Component, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Manual from './Manual'
import Feature from './Feature'
import Testimonial from './Testimonial';
import Parking from './Parking';
import Cf from './Cf';
//  import Navbar from './Navbar'
//  import Footer from './Footer'
function Home() {
  const slides = [
    {
      url: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2022/02/og-Number-Plate-Detection.png'
    },
    {
      url: 'https://c4ctec.com/uploads/serviceother/11643955920.jpg'
    },
    {
      url: 'https://www.iotforall.com/wp-content/uploads/2024/06/How-AI-and-ML-are-Revolutionizing-License-Plate-Recognition.jpg'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

   useEffect(() => {
     const timer = setTimeout(() => {
       nextSlide();
     }, 2000);

     return () => clearTimeout(timer);
   }, [currentIndex]); // arouse 

  return (
    <>
     {/* <Navbar/> */}
    <div className='max-w-[1500px] h-[800px] w-full m-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      >
        {/* left arrow */}
        <div
          className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        {/* right arrow */}
        <div
          className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div className='flex justify-center relative top-[94%]'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
        
      </div>
    </div>
   <Manual/>
   <Feature/>
    <Testimonial/>
    <Parking/>
    <Cf/>
     {/* <Footer/> */}
    </>
  );
}

export default Home;

