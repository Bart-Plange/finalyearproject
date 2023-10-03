import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './navbar/logo.jpg';
import { useState, useEffect, useRef } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null); // Reference to the mobile menu element
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status

  useEffect(() => {
    const userToken = localStorage.getItem('userToken'); // Check if a user token exists in localStorage
    setIsLoggedIn(!!userToken); // Set isLoggedIn to true if a user token is present
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Function to close the menu when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Add event listener when the mobile menu is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="text-white py-4">
      <div className="flex flex-row justify-between align-center px-12">
        <div className="logoImg">
          <img src={Logo} alt="" className="w-12" />
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex md:justify-between">
          <div className='mr-12'>
            <ul className="flex space-x-6">
              <motion.div
                whileHover={{ scale: 1.1 }} // Scale up on hover
                whileTap={{ scale: 0.9 }}   // Scale down when clicked (optional)
              >
                <Link to="/">Home</Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/towing-map">Towing Map</Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/product">Products</Link>
              </motion.div>
              {/* Dropdown Menu for Services */}
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Services
                </motion.div>
                {isOpen && (
                  <div className="absolute bg-white text-black p-2 space-y-2 top-full left-0 hidden group-hover:block">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/maintenance">Maintenance</Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/repair">Repairs</Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/service3">Booking</Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/service4">Service 4</Link>
                    </motion.div>
                  </div>
                )}
              </div>
              {/* End of Dropdown Menu */}

              {/* Add more links */}
              {isLoggedIn ? (
                <li>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </motion.button>
                </li>
              ) : (
                <>
                  <li className='flex space-x-6'>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/login">Login</Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/signup">Signup</Link>
                    </motion.div>
                  </li>
                </>
              )}
            </ul>

          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden" ref={mobileMenuRef}>
            <MobileMenu />
          </div>
        )}
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col space-y-2 p-4 bg-gray-800">
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }}   // Scale down when clicked (optional)
        >
          <Link to="/">Home</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/towing-map">Towing Map</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/product">Products</Link>
        </motion.div>
        {/* Add more links */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/login">Login</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/signup">Signup</Link>
        </motion.div>
      </div>
    </div>
  );
};



export default Navigation;
