'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartChanged, setCartChanged] = useState(false); // Added to track changes in cart

  const fetchCart = useCallback(async () => {
    setLoading(true);
    setError(null);
    setCartChanged(false);
    try {
      const response = await fetch('/api/cart');
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || 'Failed to fetch cart items');
      setCart(data.sort((a, b) => a.id - b.id));
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
      setError(error.message);
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (cartItem) => {
    setLoading(true);
    setError(null);

    console.log(cartItem);
    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItem }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || 'Failed to add item to cart');
      setCart((prevCart) => [...prevCart, data].sort((a, b) => a.id - b.id));
      setCartChanged(true); // Indicate that cart has changed
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateCartItemQuantity = async (productId, quantity) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/cart/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || 'Failed to update item quantity');
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
      setCartChanged(true); // Indicate that cart has changed
    } catch (error) {
      console.error('Error updating item quantity:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/cart/delete/${productId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      const data = await response.json();

      console.log(data);
      if (!response.ok)
        throw new Error(data.error || 'Failed to remove item from cart');
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      setCartChanged(true); // Indicate that cart has changed
    } catch (error) {
      console.error('Error removing from cart:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/cart/clear', { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to clear cart');
      setCart([]);
      setCartChanged(true); // Indicate that cart has been cleared
    } catch (error) {
      console.error('Error clearing cart:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        setLoading,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        clearCart,
        fetchCart,
        setCartChanged,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
