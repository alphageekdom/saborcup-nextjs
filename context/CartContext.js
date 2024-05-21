'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartChanged, setCartChanged] = useState(false);
  const [cartFetched, setCartFetched] = useState(false);

  // Fetch items to cart
  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart');
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch cart items');
      }

      if (!Array.isArray(data)) {
        console.error('Fetched cart data is not an array:', data);
        setCart([]);
      } else {
        setCart(data.sort((a, b) => a.id - b.id));
      }
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
      console.error('Error details:', error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cartChanged) {
      fetchCart();
      setCartChanged(false);
    }
  }, [cartChanged]);

  // Add item to cart
  const addToCart = async (cartItem) => {
    setLoading(true);
    try {
      console.log(cartItem);
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
          return prevCart
            .map((item) =>
              item.name === cartItem.name && item.size === cartItem.size
                ? { ...item, quantity: item.quantity + cartItem.quantity }
                : item
            )
            .sort((a, b) => a.id - b.id);
        } else {
          return [...prevCart, data].sort((a, b) => a.id - b.id);
        }
      });
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      console.error('Error details:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update quantity of item in cart
  const updateCartItemQuantity = async (productId, quantity) => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update item quantity');
      }

      if (!Array.isArray(data)) {
        console.error('Fetched cart data is not an array:', data);
        setCart([]);
      } else {
        setCart(data.sort((a, b) => a.id - b.id));
      }
      setCartChanged(true);
    } catch (error) {
      console.error('Error updating item quantity in cart:', error.message);
      console.error('Error details:', error);
    } finally {
      setLoading(false);
    }
  };

  // Remove item from cart
  const removeFromCart = async (productId) => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to remove item from cart');
      }

      if (!Array.isArray(data)) {
        console.error('Fetched cart data is not an array:', data);
        setCart([]);
      } else {
        setCart(data.sort((a, b) => a.id - b.id));
      }
      setCartChanged(data);
    } catch (error) {
      console.error('Error removing from car:', error.message);
      console.error('Error details:', error);
    } finally {
      setLoading(false);
    }
  };

  // Clear items from cart
  const clearCart = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart/delete', {
        method: 'POST',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to clear cart');
      }

      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error.message);
      console.error('Error details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        fetchCart,
        addToCart,
        clearCart,
        removeFromCart,
        setCartChanged,
        setCartFetched,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
