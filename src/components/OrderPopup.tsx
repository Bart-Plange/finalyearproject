// OrderPopup.tsx
import React from 'react';
import CartItem  from './CartItem';

interface OrderPopupProps {
  cart: CartItem[];
  onCancel: () => void;
  onOrder: () => void;
}

const OrderPopup: React.FC<OrderPopupProps> = ({ cart, onCancel, onOrder }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="mb-2">
              {/* Display the product name and a random ID */}
              Product: {product.name} - ID: {Math.floor(Math.random() * 100000)}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4">
          <button
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={onOrder}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;
