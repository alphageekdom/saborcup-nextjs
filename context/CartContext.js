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
  const [cartChanged, setCartChanged] = useState(false);
  const [cartFetched, setCartFetched] = useState(false);

  // Fetch items to cart
  const fetchCart = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/cart');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch cart items');
      }

      setCart(data.sort((a, b) => a.id - b.id));
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Add item to cart
  const addToCart = useCallback(async (cartItem) => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItem }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to add item to cart');
      }

      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (item) =>
            item.itemId === cartItem.itemId &&
            item.size === cartItem.size &&
            item.name === cartItem.name &&
            item.type === cartItem.type &&
            item.price === cartItem.price
        );

        if (existingItem) {
          const updatedCart = prevCart.map((item) =>
            item.itemId === cartItem.itemId &&
            item.size === cartItem.size &&
            item.name === cartItem.name &&
            item.type === cartItem.type &&
            item.price === cartItem.price
              ? { ...item, quantity: item.quantity + cartItem.quantity }
              : item
          );
          return updatedCart.sort((a, b) => a.id - b.id);
        } else {
          const validData = data.filter((item) => item && item.id); // Filter out any undefined items
          return [...prevCart, ...validData].sort((a, b) => a.id - b.id);
        }
      });
    } catch (error) {
      console.error('Error adding to cart:', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

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

      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (item) =>
            item.itemId === cartItem.itemId &&
            item.size === cartItem.size &&
            item.name === cartItem.name &&
            item.type === cartItem.type &&
            item.price === cartItem.price
        );

        if (existingItem) {
          const updatedCart = prevCart.map((item) =>
            item.itemId === cartItem.itemId &&
            item.size === cartItem.size &&
            item.name === cartItem.name &&
            item.type === cartItem.type &&
            item.price === cartItem.price
              ? { ...item, quantity: item.quantity + cartItem.quantity }
              : item
          );
          return updatedCart.sort((a, b) => a.id - b.id);
        } else {
          const validData = data.filter((item) => item && item.id); // Filter out any undefined items
          return [...prevCart, ...validData].sort((a, b) => a.id - b.id);
        }
      });
    } catch (error) {
      console.error('Error updating item quantity in cart:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Remove item from cart
  const removeFromCart = useCallback(async (productId) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/cart/delete/${productId}`, {
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

      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } catch (error) {
      console.error('Error removing from cart:', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Clear items from cart
  const clearCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart/clear', {
        method: 'POST',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to clear cart');
      }

      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

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
