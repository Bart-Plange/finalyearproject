import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './navbar/logo.jpg';

const NavigationLoggedProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    setIsLoggedIn(!!userToken);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggingOut(true);

    setTimeout(() => {
      // Perform logout logic here
      // Clear user token, etc.

      setIsLoggingOut(false);

      // Redirect the user to the login page or any other desired page
      history.push('/login');
    }, 3000); // Simulated 3-second delay
  };

  return (
    <div className="text-white py-4">
      <div className="flex flex-row justify-between align-center px-12">
        <div className="logoImg">
          <img src={Logo} alt="" className="w-12" />
        </div>

        <div className="hidden md:flex md:justify-between">
          <div className="mr-12">
            <ul className="flex space-x-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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

              {isLoggedIn ? (
                <li>
                  {isLoggingOut ? (
                    <p>Logging you out...</p>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleLogout}
                    >
                      Logout
                    </motion.button>
                  )}
                </li>
              ) : (
                <>
                  <li className="flex space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/profile">Profile</Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="/">Logout</Link>
                    </motion.div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

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
        
        <li className='flex space-x-6'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/profile">Profile</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/">logout</Link>
          </motion.div>
        </li>
      </div>
    </div>
  );
};



export default NavigationLoggedProfile;
