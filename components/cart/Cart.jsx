'use client';

import { useState, useEffect } from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import CartMenu from './CartMenu';

import { useCart } from '@/context/CartContext';

const Cart = ({
  onCartToggle,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  closeCart,
}) => {
  const {
    cart,
    fetchCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    setCartChanged,
    cartChanged,
    loading,
    error,
  } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartFetched, setCartFetched] = useState(false);

  useEffect(() => {
    if (isCartOpen && !cartFetched) {
      fetchCart();
      setCartFetched(true);
      setCartChanged(false);
    }
  }, [isCartOpen, cartFetched, fetchCart, setCartChanged]);

  useEffect(() => {
    if (cartChanged) {
      fetchCart();
      setCartChanged(false);
    }
  }, [cartChanged, fetchCart, setCartChanged]);

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
    setCartChanged(true);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    updateCartItemQuantity(productId, quantity);
    setCartChanged(true);
  };

  const handleClearCart = () => {
    clearCart();
    setCartChanged(true);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (!isCartOpen && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    if (onCartToggle) {
      onCartToggle();
    }
    if (!isCartOpen) {
      setCartFetched(false);
    }
  };

  useEffect(() => {
    if (closeCart && isCartOpen) {
      setIsCartOpen(false);
    }
  }, [closeCart, isCartOpen]);

  return (
    <div className='flex items-center w-full max-w-none m-0 p-0'>
      <div className='relative'>
        <FaShoppingCart
          className='mb-0 cursor-pointer transition duration-300 ease-in-out text-white hover:text-primary'
          size={24}
          onClick={toggleCart}
        />
      </div>
      <CartMenu
        cartItems={cart}
        error={error}
        loading={loading}
        isOpen={isCartOpen}
        onRemoveItem={handleRemoveItem}
        handleClearCart={handleClearCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default Cart;
