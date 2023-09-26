
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductProps {
  id: string;
  name: string;
  description: string;
  prices: number[];
  images: string[]; 
  addToCart: (product: React.FC<ProductProps>) => void; // Pass ProductProps as the argument type
}

const Product: React.FC<ProductProps> = ({ id, name, description, prices, images, addToCart }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const swipeLeft = () => {
    console.log('Swiped left')
    setSelectedImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const swipeRight = () => {
    setSelectedImageIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <motion.div
      className="bg-gray-200 p-6 rounded-lg shadow-md"
      drag="x" // Enable horizontal drag
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, info) => {
        const offset = e instanceof MouseEvent ? info.point.x : info.offset.x;

        if (offset > 50) {
          swipeLeft();
        } else if (offset < -50) {
          swipeRight();
        }
      }}
    >
      <motion.div
        key={selectedImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
      <img  src={images[selectedImageIndex]} alt={name} className="w-full mb-4 object-fit" /> {/* Display the product image */}
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className='flex align-cemter justify-between'>
      <p className="text-gray-900 text-lg">GHS {prices[selectedImageIndex].toLocaleString()}</p>
      <button
        onClick={() => addToCart({
          id,
          name,
          description,
          prices,
          images,
          addToCart: function (): void {
            throw new Error('Function not implemented.');
          }
        })}
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  Add to Cart
</button>


        </div>
        
        {images.length > 1 && ( 
        <div className="flex justify-between mt-4">
          <button onClick={swipeLeft} className='bg-blue-500 p-2 rounded-lg text-white'>&lt; Previous</button>
          <button onClick={swipeRight} className='bg-blue-500 p-2 rounded-lg text-white'>Next &gt;</button>
        </div>
      )}
        
      </motion.div>
    </motion.div>
  );
};

export default Product;
