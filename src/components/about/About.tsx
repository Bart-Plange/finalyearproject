import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className=''>
      <div className='container mx-auto'>
        <h2 className='text-orange-500 font-bold text-2xl py-4'>WHAT YOU NEED TO KNOW</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ x: 0, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-green-500">Our Mission</h3>
            <p className="text-gray-700">
              We're dedicated to providing a seamless and innovative solution for all your automobile needs. Our mission is to make your automobile experience safer, more convenient, and enjoyable.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ x: 0, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-green-500">Services</h3>
            <p className="text-gray-700">
              Our platform connects users with a range of services, from <Link to="/maintenance" className='text-blue-700 font-bold cursor-pointer'>maintenance services</Link> to top-quality <Link to="/product" className='text-blue-700 font-bold cursor-pointer'>automobile products</Link>.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mt-6"
          initial={{ x: 0, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-green-500">Customer Satisfaction</h3>
          <p className="text-gray-700">
            We're passionate about automobiles and dedicated to providing exceptional customer service. If you have any questions or feedback, feel free to <Link to="contact" className='text-blue-700 font-bold cursor-pointer'>contact us</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
