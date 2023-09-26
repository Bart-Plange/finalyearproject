import CartItem from './CartItem';
import Close from '../assets/close.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cart = ({ cart, removeFromCart }: { cart: CartItem[], removeFromCart: any}) => {
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
      </div>
    </div>
  );
};

export default Cart;
