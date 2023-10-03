import CartItem from './CartItem';
import Close from '../assets/close.svg';
import OrderPopup from './OrderPopup'; // Import the OrderPopup component
import { useState } from 'react';

const Cart = ({ cart, removeFromCart }: { cart: CartItem[], removeFromCart: any }) => {
  // Calculate the total price
  const total = cart.reduce((acc, product) => {
    if (Array.isArray(product.prices) && product.prices.length > 0) {
      return acc + product.prices[0];
    }
    return acc;
  }, 0);

  const handleOrderNow = () => {
    // Perform the order action here
    // You can send the cart data to your backend or take any other appropriate action
    console.log('Order Now clicked');
  };

  // State to control the visibility of the OrderPopup
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  const handleCallToOrder = () => {
    // Perform the call to order action here
    // You can add your logic for placing the order
    console.log('Calling to order');
    setShowPopup(true); // Close the popup
  };

  return (
    <div className='relative'>
      <div>
        <h2 className='text-gray-200'>Your Cart</h2>
        <ul className='text-white text-[18px]'>
          {cart.map((product) => (
            <li key={product.id} className='flex'>
              {product.name ? (
                <>
                  {product.name} - GHc {Array.isArray(product.prices) && product.prices.length > 0 ? product.prices[0] : 'N/A'}
                </>
              ) : (
                <>Product Unavailable</>
              )}

              <button onClick={() => removeFromCart(product.id)} className='pl-6'><img src={Close} alt="cancel" /></button>
            </li>
          ))}
        </ul>
        <div className='mt-4'>
          <p className='text-gray-200'>Total: GHc {total}</p>
          <button onClick={handleCallToOrder} className='bg-blue-500 text-white py-2 px-4 rounded mt-2'>
            Order Now
          </button>
        </div>
      </div>

      {showPopup && (
        <OrderPopup cart={cart} onCancel={handleClosePopup} onOrder={handleCallToOrder} />
      )}
    </div>
  );
};

export default Cart;
