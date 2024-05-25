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
  const { fetchCart, clearCart } = useCart();
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
  };

  useEffect(() => {
    if (closeCart && isCartOpen) {
      setIsCartOpen(false);
    }
  }, [closeCart, isCartOpen]);

  return (
    <div className='relative'>
      <div className='flex items-center w-full max-w-none m-0 p-0'>
        <FaShoppingCart
          className='mb-0 cursor-pointer transition duration-300 ease-in-out text-white hover:text-primary'
          size={24}
          onClick={toggleCart}
        />
      </div>
      <CartMenu isOpen={isCartOpen} />
    </div>
  );
};

export default Cart;
