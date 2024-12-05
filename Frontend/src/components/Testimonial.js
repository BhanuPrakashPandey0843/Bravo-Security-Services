import React from 'react'
import { TestimonialData } from './TestimonialData'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import { FaStar } from "react-icons/fa";


function Testimonial() {
  return (
    <div className='bg-primary font-customFont pb-20' >
    <h1 className='text-2xl flex justify-center pt-14  md:text-3xl  text-white font-bold '>Our Testimonials</h1>
    <Splide options={{perPage:1}}>
    {TestimonialData.map((TestimonialData)=>(
      <SplideSlide key={TestimonialData.id}>
            <figure class="md:flex sm:justify-center sm:mx-auto bg-white rounded-xl p-8 md:p-0 mt-8 w-8/12 mx-auto ">
  <img className="w-36 h-24 md:w-48 md:h-auto sm:h-auto md:rounded-l-xl  mx-auto" src={TestimonialData.img} alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <p className='text-xl text-black font-bold'>{TestimonialData.name}</p>
  <FaStar className='text-orange-500 inline-block '/><FaStar className='text-orange-500 inline-block'/><FaStar className='text-orange-500 inline-block'/>
  <FaStar className='text-orange-500 inline-block'/><FaStar className='text-gray-400 inline-block'/>
    <blockquote>
      <p class="text-lg font-medium">
      {TestimonialData.text}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

      </SplideSlide>
    ))}
    </Splide>
     </div>
  )
}

export default Testimonial
