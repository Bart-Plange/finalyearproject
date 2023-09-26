import './product.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Product, Cart } from '../../components';
import { Airfilter, Beams, Beams1, Beams2, Beams3, Bulb1, Bulb2, Bulbs, Engines, Engines1, Fuelfilter, Fuelpump, Fuelpump1, Fuelpump2, Gearbox, Gearbox1, Headlight, Sparkplugs, Sparkplugs1, Sparkplugs2, Starter, Tracking } from './data'; // Import the image
import Footer from '../../components/Footer';
import CartCounter from '../../components/CartCounter';

const products = [
  {
    id: '1',
    image: [Airfilter], // Use the imported image
    name: 'Airfilter',
    description: 'Keep your car\'s air clean and fresh with our high-quality air filters. Our filters effectively remove dust, pollen, and other particles, ensuring a healthier cabin environment.',
    prices: [40],
  },
  {
    id: '2',
    image: [Engines, Engines1], // Use the imported image
    name: 'Car Engines',
    description: 'Experience enhanced performance and reliability with our premium car engines. Our engines are designed for optimal power and fuel efficiency, ensuring a smooth driving experience.',
    prices: [40000, 35000], // Prices for each respective image
  },

  {
    id: '3',
    image: [Bulbs, Bulb1, Bulb2], // Use the imported image
    name: 'Bulbs',
    description: 'Illuminate the road ahead with our high-quality car bulbs. Our bulbs provide bright and clear light, improving visibility and ensuring safety during night driving.',
    prices: [45, 20, 70],
  },
  {
    id: '4',
    image: [Gearbox, Gearbox1], // Use the imported image
    name: 'Gear box',
    description: 'Ensure smooth gear shifts and optimal performance with our advanced gearbox solutions. Our gearboxes are engineered for durability and precision, enhancing your driving experience.',
    prices: [10000, 9000],
  },
  {
    id: '5',
    image: [Fuelpump, Fuelpump1, Fuelpump2], // Use the imported image
    name: 'Fuelpump',
    description: 'Fuel your car with confidence using our reliable fuel pumps. Our pumps deliver a steady flow of fuel, ensuring efficient combustion and optimal engine performance.',
    prices: [400, 400, 400],
  },
  {
    id: '6',
    image: [Sparkplugs1, Sparkplugs, Sparkplugs2], // Use the imported image
    name: 'Set of Sparkplugs',
    description: 'Ignite your car\'s engine with our high-performance spark plugs. Our spark plugs ensure efficient combustion, better fuel economy, and improved overall engine health.',
    prices: [1000, 900, 900],
  },
  {
    id: '7',
    image: [Starter], // Use the imported image
    name: 'Starters and alternators',
    description: 'Get your car running smoothly every time with our dependable starters. Our starters provide quick and reliable engine cranking, ensuring a stress-free driving experience.',
    prices: [1000],
  },
  {
    id: '8',
    image: [Tracking], // Use the imported image
    name: 'Car Trackers',
    description: 'Keep your vehicle safe and secure with our advanced tracking device. Our tracker allows you to monitor your vehicle\'s location and status from anywhere, enhancing your peace of mind.',
    prices: [1500],
  },
  {
    id: '9',
    image: [Headlight], // Use the imported image
    name: 'Headlights',
    description: 'Keep your vehicle safe and secure with our advanced tracking device. Our tracker allows you to monitor your vehicle\'s location and status from anywhere, enhancing your peace of mind.',
    prices: [400],
  },
  {
    id: '10',
    image: [Beams, Beams1, Beams2, Beams3], // Use the imported image
    name: 'Different Beam sets',
    description: 'Keep your vehicle safe and secure with our advanced tracking device. Our tracker allows you to monitor your vehicle\'s location and status from anywhere, enhancing your peace of mind.',
    prices: [300, 100, 300, 400],
  },
  {
    id: '11',
    image: [Fuelfilter], // Use the imported image
    name: 'Fuelfilter',
    description: 'Keep your vehicle safe and secure with our advanced tracking device. Our tracker allows you to monitor your vehicle\'s location and status from anywhere, enhancing your peace of mind.',
    prices: [70],
  },
  // Other products
];


const ProductPage: React.FC = () => {
  const [cart, setCart] = useState<typeof Product[]>([]);

  function addToCart(product: typeof Product): void {
    setCart(prevCart => [...prevCart, product]);
  }

  function removeFromCart(productId: string): void {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }

  const cartCounter = cart.length

  return (
    <div className=''>
      <Navigation />
      <div className='container'>
        {/* ... */}
        {/* Render the Cart component and pass the cart state */}
        <Cart cart={cart} removeFromCart={removeFromCart} />
        <CartCounter count={cartCounter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="hover:shadow-lg transition duration-300 ease-in-out"
            >   
              <Product
                id={product.id}
                name={product.name}
                description={product.description}
                prices={product.prices}
                images={product.image}
                addToCart={addToCart}
              />
            </motion.div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;