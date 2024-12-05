import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-28" style={{ backgroundColor: '#5C6AC4' }}>
     
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
          <motion.button
            className="py-4 px-6 w-full max-w-xs font-medium rounded-xl shadow-6xl focus:ring focus:ring-gray-300 bg-white hover:bg-gray-100 transition ease-in-out duration-200"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start 14 days free trial
          </motion.button>
          <motion.button
            className="inline-flex items-center justify-center py-4 px-6 w-full max-w-xs text-white font-medium border border-white border-opacity-20 hover:border-opacity-40 rounded-xl focus:ring focus:ring-white focus:ring-opacity-40 bg-transparent hover:bg-black hover:bg-opacity-5 transition ease-in-out duration-200"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="mr-2.5"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Book a call</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;