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
    loading,
  } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      fetchCart();
    }
  }, [isCartOpen, fetchCart]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (!isCartOpen && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    if (onCartToggle) {
      onCartToggle();
    }
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    updateCartItemQuantity(productId, quantity);
  };

  const handleClearCart = () => {
    clearCart();
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
