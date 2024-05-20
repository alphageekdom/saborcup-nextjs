'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart');
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch cart items');
      }
      setCart(data);
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
      console.error('Error details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (cartItem) => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to add item to cart');
      }

      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (item) => item.name === cartItem.name && item.size === cartItem.size
        );

        if (existingItem) {
          return prevCart.map((item) =>
            item.name === cartItem.name && item.size === cartItem.size
              ? { ...item, quantity: item.quantity + cartItem.quantity }
              : item
          );
        } else {
          return [...prevCart, data];
        }
      });
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      console.error('Error details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};
