import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from './BRAVO.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when navigating to another page
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 font-customFont'>
      {/* Upper Navbar */}
      <div className='bg-primary py-2 flex flex-wrap justify-between w-full md:py-2 px-4'>
        <span className='text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap font-bold bg-orange-400 text-white rounded-sm font-customFont ml-4 md:ml-16'>
          Warning
        </span>
        <div className='flex justify-between items-center gap-4 font-customFont text-white mr-4 md:mr-10'>
          <CallIcon style={{ color: 'white', fontSize: '20px' }} />
          1234567890
        </div>
      </div>

      {/* Lower Navbar */}
      <div className='bg-secondary flex items-center justify-between w-full py-4 md:px-4'>
        <Link to='#' className='flex items-center font-bold text-black text-xl sm:text-2xl'>
          <img src={Logo} alt='Logo' className='w-12' />
          <span className='ml-2'>Bravo Security Services</span>
        </Link>
        <button onClick={toggleMenu} className='md:hidden text-black focus:outline-none'>
          {menuOpen ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
        </button>
        <ul
          className={`flex-col md:flex-row md:items-center md:flex ${
            menuOpen ? 'flex' : 'hidden'
          } absolute md:static top-16 left-0 w-full md:w-auto bg-secondary md:bg-transparent shadow-md md:shadow-none transition-all duration-500 ease-in-out transform ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          } md:translate-y-0`}
        >
          <li className='mb-2 md:mb-0'>
            <NavLink
              to='/'
              className='nav-link block px-4 py-2 md:py-0 font-bold text-black hover:text-primary duration-200'
              activeClassName='text-primary'
              exact
            >
              Home
            </NavLink>
          </li>
          <li className='mb-2 md:mb-0'>
            <NavLink
              to='/contact'
              className='nav-link block px-4 py-2 md:py-0 font-bold text-black hover:text-primary duration-200'
              activeClassName='text-primary'
            >
              Contact
            </NavLink>
          </li>
          <li className='mb-2 md:mb-0'>
            <NavLink
              to='/about'
              className='nav-link block px-4 py-2 md:py-0 font-bold text-black hover:text-primary duration-200'
              activeClassName='text-primary'
            >
              About
            </NavLink>
          </li>
          <li className='mb-2 md:mb-0 flex justify-center md:justify-start'>
            <button
              type='button'
              className='inline-block bg-tertiary px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 font-customFont rounded-full'
            >
              Apply Now
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
