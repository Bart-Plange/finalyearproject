import React from 'react';

interface CartCounterProps {
  count: number; // Specify the type as number
}

const CartCounter: React.FC<CartCounterProps> = ({ count }) => {
  return (
    <div className="cart-counter">
      <span className="cart-icon">🛒</span>
      <span className="count text-white">{count}</span>
    </div>
  );
};

export default CartCounter;
