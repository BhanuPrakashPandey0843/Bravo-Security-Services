import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import Jassi from './Jassi';
// import Navbar from './Navbar'
// import Footer from './Footer'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
    {/* <Navbar/> */}
    <div 
      className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-center" 
      style={{backgroundImage:"url('https://i.ytimg.com/vi/vGsm9nOnFYA/maxresdefault.jpg')"}} 
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="border border-gray-200 p-4 m-4 rounded-2xl bg-white"
      >
        <h2 className='align-text-top text-center text-3xl md:text-5xl text-primary font-bold tracking-px-n py-6 font-customFont'>
          Contact Us
        </h2>
        <form 
          className="mt-16 lg:mt-0 max-w-xl w-full bg-white z-50 font-customFont" 
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
              <div className="flex items-center border rounded-md border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600">
                <FaUser className="ml-3 text-gray-400" />
                <input 
                  required 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Your Name" 
                  className="block w-full p-2.5 pl-10 bg-transparent focus:outline-none" 
                />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div className="flex items-center border rounded-md border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600">
                <FaEnvelope className="ml-3 text-gray-400" />
                <input 
                  required 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Your Email" 
                  className="block w-full p-2.5 pl-10 bg-transparent focus:outline-none" 
                />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">Phone Number</label>
              <div className="flex items-center border rounded-md border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600">
                <FaPhone className="ml-3 text-gray-400" />
                <input 
                  required 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="Your Phone Number" 
                  className="block w-full p-2.5 pl-10 bg-transparent focus:outline-none" 
                />
              </div>
            </div>
            <div className="relative sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <div className="flex items-center border rounded-md border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600">
                <FaCommentDots className="ml-3 text-gray-400" />
                <textarea 
                  required 
                  name="message" 
                  id="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Your Message" 
                  className="block w-full p-2.5 pl-10 bg-transparent focus:outline-none"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-primary text-white rounded-md py-2 px-4 hover:bg-tertiary transition duration-300 ease-in-out"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
     <Jassi/> 
    {/* <Footer/>*/}
    </> 
  );
}

export default Contact;
