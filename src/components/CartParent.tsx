// CartParent.js
import Cart from './Cart'; 

function CartParent() {

  const cart = /* ... */;
    const removeFromCart = (id) => {
      
  };

  return (
    <div>
      {/* Render the Cart component and pass the cart and removeFromCart props */}
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default CartParent;
