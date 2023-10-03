import React from 'react';
import { motion } from 'framer-motion';
import bmw from '../assets/cars/bmw.svg';
import benz from '../assets/cars/msbenx.png';
import nissan from '../assets/cars/nissan.svg';
import toyota from '../assets/cars/toyota.svg';
import volvo from '../assets/cars/volvo.svg';

const imageVariants = {
  hover: {
    rotate: 180,
    scale: 1.1, // Increase the scale when hovered
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
  initial: {
    rotate: 0,
    scale: 1,
  },
};

const CarsServices = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <p className='pb-6 md:pl-16 md:ml-10 text-orange-500 text-4xl'>Trusted by many brands</p>
        <div className='flex flex-row space-x-2 md:space-x-8 items-center justify-evenly'>
          <motion.img
            src={bmw}
            alt='bmw'
            className='w-12'
            variants={imageVariants}
            initial='initial'
            whileHover='hover'
          />
          <motion.img
            src={benz}
            alt='benz'
            className='w-12'
            variants={imageVariants}
            initial='initial'
            whileHover='hover'
          />
          <motion.img
            src={nissan}
            alt='nissan'
            className='w-12'
            variants={imageVariants}
            initial='initial'
            whileHover='hover'
          />
          <motion.img
            src={toyota}
            alt='toyota'
            className='w-12'
            variants={imageVariants}
            initial='initial'
            whileHover='hover'
          />
          <motion.img
            src={volvo}
            alt='volvo'
            className='w-12'
            variants={imageVariants}
            initial='initial'
            whileHover='hover'
          />
        </div>
      </div>
    </div>
  );
};

export default CarsServices;
