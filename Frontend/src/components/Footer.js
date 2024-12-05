import React from 'react';
import Logo from './BRAVO.png';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white font-customFont">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Company
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="/"
                    className="flex items-center gap-2 text-white text-xl sm:text-2xl font-bold hover:text-primary transition-colors transform hover:scale-110"
                  >
                    <img
                      src={Logo}
                      alt="Logo"
                      className="w-14 transition-transform transform hover:rotate-12 hover:scale-125"
                    />
                    Bravo Security Solutions
                  </a>
                </li>
                <li className="mb-4 flex items-center">
                  <EmailIcon className="text-white hover:text-primary transition-colors duration-200" />
                  <a
                    href="/"
                    className="ml-2 hover:text-primary transition-colors duration-200"
                  >
                    bravo512@gmail.com
                  </a>
                </li>
                <li className="mb-4 flex items-center">
                  <CopyrightIcon className="text-gray-400 hover:text-primary transition-colors duration-200" />
                  <a
                    href="/"
                    className="ml-2 hover:text-primary transition-colors duration-200"
                  >
                    Bravo. All rights reserved
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Help center
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline hover:text-primary transition-colors duration-200"
                  >
                    Company
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline hover:text-primary transition-colors duration-200"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline hover:text-primary transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline hover:text-primary transition-colors duration-200"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline hover:text-primary transition-colors duration-200"
                  >
                    Quick Link
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline hover:text-primary transition-colors duration-200"
                  >
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline hover:text-primary transition-colors duration-200"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Download
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Contact for Security Services
                  </a>
                </li>
                <li className="mb-4">
                  <button
                    type="button"
                    className="inline-block bg-tertiary px-10 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition-transform duration-150 ease-in-out hover:bg-primary-accent-300 hover:scale-110 focus:bg-primary-accent-300 focus:scale-110 focus:outline-none focus:ring-0 active:bg-primary-600 active:scale-110 rounded-full"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-primary w-full flex flex-col items-center justify-between p-4 md:flex-row">
        <span className="text-sm text-white sm:text-center mb-4 md:mb-0 font-customFont">
          © 2024 <a href="https://flowbite.com/" className="hover:underline text-white">team. All Rights Reserved.</a>
        </span>
        <div className="flex space-x-6">
          
          <a href="https://www.linkedin.com/in/bhanu-prakash-pandey-67727b318/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform transform hover:scale-125">
          <FaLinkedinIn />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform transform hover:scale-125">
          <FaGithub  />
          </a>
          <a href="https://www.linkedin.com/in/nishu-kumari-009632245/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform transform hover:scale-125">
          <FaLinkedinIn />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform transform hover:scale-125">
          <FaGithub  />
          </a>
          <a href="www.linkedin.com/in/jasika-pradhan-61462027a" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform transform hover:scale-125">
          <FaLinkedinIn />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform transform hover:scale-125">
          <FaGithub  />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;