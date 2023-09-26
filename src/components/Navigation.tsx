import { Link } from 'react-router-dom';
import Logo from './navbar/logo.jpg';
import { useState, useEffect, useRef } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null); // Reference to the mobile menu element

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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/towing-map">Towing Map</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            {/* Add more links */}
          </ul>
          </div>

          <div>
            <Link to="/login" className='mr-4'>Login</Link>
            <Link to="/signup">Signup</Link>
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
        <Link to="/">Home</Link>
        <Link to="/towing-map">Towing Map</Link>
        <Link to="/product">Products</Link>
        {/* Add more links */}
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Navigation;
