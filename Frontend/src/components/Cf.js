import React from 'react'
import { motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";



function Cf() {
  return (
    <section className="relative py-28 font-customFont" style={{ backgroundColor: '#5C6AC4' }}>
     
      <div className="relative z-10 container px-4 mx-auto flex flex-col items-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="mb-5 text-4xl md:text-5xl text-white font-bold tracking-px-n leading-tight">
            Ready to make your Security System more Secure?
          </h2>
          <p className="text-white text-opacity-90 font-medium md:max-w-xl mx-auto">
          Guardian of roads, vigilant and wise,
ANPR watches, under starlit skies,
Securing paths where shadows fall,
With eyes that see beyond the wall.
          </p>
        </motion.div>
        <div className="mt-8 flex flex-col space-y-4 items-center">
        <button
                    type="button"
                    className="  bg-white mx-5 px-10 py-2.5 text-xs font-medium  leading-normal text-primary shadow-primary-3
                     transition-transform duration-150 ease-in-out hover:bg-primary-accent-300 hover:scale-110 focus:bg-primary-accent-300 focus:scale-110 
                     focus:outline-none focus:ring-0 active:bg-primary-600 active:scale-110 rounded-full "
                  >
                    Get Leads <FaArrowRightLong className="px-1 size-5 py-0.5 inline"/>
                  </button>
          
        </div>
      </div>
    </section>
  )
}

export default Cf
