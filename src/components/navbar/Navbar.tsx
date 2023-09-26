import { Link } from 'react-router-dom';
import './navbar.css'; // You can keep your CSS for styling
import Logo from './logo.jpg';
import { useState } from 'react';

const Navbar = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count] = useState<number>(0);
  
  return (
    <div className="text-white">
      <div className='py-auto'>

        {/* Desktop Menu (Hidden on Small Screens) */}
        <div className='hidden lg:flex flex-row justify-between px-12 py-3 gap-12'>
          <div className='logoImg'>
            <img src={Logo} alt="logo" className='logoImg' />
          </div>
          <div className="">
            <ul className='flex space-x-6 '>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/towing-map">Towing Map</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              {/* Add more links */}
            </ul>
          </div>

          <div>
            <ul className='flex flex-row space-x-4'>
              <li>
                <a href="">Sign In</a>
              </li>
              <div className='h-[26px] w-[2px] border-gray-500 flex flex-col'/>
              <li>
                <a href="">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu (Hidden on Large Screens) */}
        <div className='md:hidden block fixed top-0 left-0 w-full bg-gray-900'>
          <div className='px-4 py-3 flex items-center justify-between'>
            <div>
              <p className='text-white'>Logo</p>
            </div>
            <div className='text-white'>
              <button>
                {/* Mobile Menu Icon (Hamburger Menu) */}
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
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className='px-4 py-2'>
            <ul className='flex flex-col space-y-2'>
              <li><Link to="/" className='text-white'>Home</Link></li>
              <li><Link to="/towing-map" className='text-white'>Towing Map</Link></li>
              <li><Link to="/login" className='text-white'>Login</Link></li>
              <li><Link to="/signup" className='text-white'>Signup</Link></li>
              {/* Add more links */}
            </ul>
          </div>

          {/* Mobile Menu - Sign In and Sign Up */}
          <div className='px-4 py-2'>
            <ul className='flex flex-col space-y-2'>
              <li><a href="" className='text-white'>Sign Up</a></li>
              <li><a href="" className='text-white'>Sign In</a></li>
            </ul>
          </div>
        </div>

        {/* Display the cart count */}
        <div>
          <p>Cart Count: {count}</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
