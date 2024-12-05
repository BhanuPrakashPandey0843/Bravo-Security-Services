import React from 'react';
import Aboutpage from './Aboutpage.png'; 
import Aboutdata from './Aboutdata';

function About() {
  return (
    <>
      <div 
        className="relative bg-cover bg-center sm:h-[720px] lg:h-[480px] xl:h-[480px] font-customFont" 
        style={{ backgroundImage: `url(${Aboutpage})` }}
      >
       
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-3 gap-4 pt-20 lg:pl-44 pl-5">
            <div className="col-span-2">
              <p className="text-sm font-bold text-white z-40"></p>
              <h1 className="text-5xl text-white font-bold mt-2"></h1>
            </div>
          </div>
        </div>
      </div>
      <Aboutdata />
    </>
  );
}

export default About;