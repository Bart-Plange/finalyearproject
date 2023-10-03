import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import mechanic from '../assets/cars/mechanic.svg';
import repair from '../assets/cars/repair.svg';
import set from '../assets/cars/set.svg';
import towing from '../assets/cars/towing.svg';

const ServiceCard = ({ title, to, imageSrc, description, onClick }: { title: string, to: string, imageSrc: string, description: string, onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative h-72 w-60 mb-8 rounded-xl shadow-sm shadow-blue-500 cursor-pointer transition-transform transform`}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <div className="text-orange-500 font-bold text-2xl">
          <Link to={to}>{title}</Link>
        </div>
        <hr className="divider" />
        <div>
          <img src={imageSrc} alt={title} className="w-24" />
        </div>
        <div className="pt-4 text-gray-200">
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const items = [
    {
      id: 'sale',
      title: 'Sale of Spare Parts',
      to: '/product',
      imageSrc: set,
      description: 'All kinds of parts are available for sale and replacements',
    },
    {
      id: 'maintenance',
      title: 'Maintenance Service',
      to: '/maintenance',
      imageSrc: mechanic,
      description: 'If you are registered with us, then you are at peace. Find out how',
    },
    {
      id: 'repair',
      title: 'Repair Services',
      to: '/repair',
      imageSrc: repair,
      description: 'Needs vehicle repair for any damaged part? You found us. Visit any of our centers.',
    },
    {
      id: 'towing',
      title: 'Towing Services',
      to: '/towing-map',
      imageSrc: towing,
      description: 'You can visit our maps section to check for available towing service in your location.',
    },
  ];

  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              to={item.to}
              imageSrc={item.imageSrc}
              description={item.description}
              onClick={() => setSelectedId(item.id)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        <div className='flex justify-center align-center relative'>

        {selectedId && (
          <motion.div
            key={selectedId}
            className="fixed top-1/2 left-1/2 w-1/2 h-1/2 flex items-center justify-center bg-blue-950 bg-opacity-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div className="bg-blue-500 rounded-xl p-4">
              <h5>{items.find((item) => item.id === selectedId)?.title}</h5>
              <p>{items.find((item) => item.id === selectedId)?.description}</p>
              <button onClick={() => setSelectedId(null)} className='text-white'>Close</button>
            </motion.div>
          </motion.div>
        )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Services;
