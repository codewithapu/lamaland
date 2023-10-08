// utils/cart.ts

import Cookies from 'js-cookie';

export const setCartItem = (product: any) => {
  let cartItems = [];
  const currentCart = Cookies.get('cart');
  
  if (currentCart) {
    cartItems = JSON.parse(currentCart);
  }
  
  cartItems.push(product);
  Cookies.set('cart', JSON.stringify(cartItems), { expires: 7 }); // expires in 7 days
};

export const getCartItems = () => {
  const currentCart = Cookies.get('cart');
  
  if (currentCart) {
    return JSON.parse(currentCart);
  }
  
  return [];
};
