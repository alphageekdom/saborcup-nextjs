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
      if (!response.ok)
        throw new Error(data.error || 'Failed to fetch cart items');
      setCart(data.sort((a, b) => a.id - b.id));
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
      setCart([]);
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
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItem }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || 'Failed to add item to cart');
      setCart(data.sort((a, b) => a.id - b.id));
    } catch (error) {
      console.error('Error adding to cart:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateCartItemQuantity = async (productId, quantity) => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || 'Failed to update item quantity');
      setCart(data.sort((a, b) => a.id - b.id));
    } catch (error) {
      console.error('Error updating item quantity:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/cart/delete/${productId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || 'Failed to remove item from cart');
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } catch (error) {
      console.error('Error removing from cart:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart/clear', { method: 'POST' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to clear cart');
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
