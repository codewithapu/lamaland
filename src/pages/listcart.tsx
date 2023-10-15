import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

type ProductType = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: 'VEG' | 'NON_VEG';
  finalprice: number;
};

const MyCart: React.FC = () => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const { updateCartCount, cartCount } = useCart();

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
    updateCartCount();
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, [cartCount]);

  return (
    <div>
      <h1>My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(product => (
            <div key={product.id}>
              <img src={product.imageUrl} alt={product.name} width={100} />
              <h2>{product.name}</h2>
              <p>Original Price: ₹{product.price}</p>
              <p>
                Discounted Price: ₹{product.finalprice}
              </p>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}


export default MyCart;
