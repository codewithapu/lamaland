import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

type ProductType = {
    Id: string | number; // Modify based on your product data.
    Name: string;
    Price: number;
    Discount: number;
    BannerImageLink: string;
    // ... other fields ...
  };
  
  const MyCart: React.FC = () => {
    const [cart, setCart] = useState<ProductType[]>([]);
    const { updateCartCount, cartCount } = useCart(); // Get the cartCount and updateCartCount from context
  
    const clearCart = () => {
      localStorage.removeItem('cart');
      setCart([]);
      updateCartCount(); // Update cart count in context
    };
  
    useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(savedCart);
    }, [cartCount]); // Depend on cartCount to re-run useEffect when the cart count changes
  

  return (
    <div>
      <h1>My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(product => (
            <div key={product.Id}>
              <img src={product.BannerImageLink} alt={product.Name} width={100} />
              <h2>{product.Name}</h2>
              <p>Price: ₹{product.Price}</p>
              {product.Discount > 0 && (
                <p>
                  Discounted Price: ₹{Math.round(product.Price * (100 - product.Discount) / 100)}
                </p>
              )}
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default MyCart;
