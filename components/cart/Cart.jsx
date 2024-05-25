'use client';

import { useState, useEffect, useCallback } from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import { IoClose } from 'react-icons/io5';
import { GiBeachBag } from 'react-icons/gi';

import CartMenu from './CartMenu';

import { useCart } from '@/context/CartContext';
import { usePathname } from 'next/navigation';

const Cart = ({ isMobileMenuOpen, setIsMobileMenuOpen, closeCart }) => {
  const { cart, fetchCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathname = usePathname();

  const handleFetchCart = useCallback(() => {
    if (isCartOpen) {
      fetchCart();
    }
  }, [isCartOpen, fetchCart]);

  useEffect(() => {
    handleFetchCart();
  }, [handleFetchCart]);

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

  useEffect(() => {
    setIsCartOpen(false);
    setIsSidebarOpen(false);
  }, [pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseCart = () => {
    setIsPanelOpen(false);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>
        <FaShoppingCart
          className='mb-0 cursor-pointer transition duration-300 ease-in-out text-white hover:text-primary z-50'
          size={24}
        />
      </button>
      <div
        className={`fixed top-0 left-0 w-96  h-full bg-white text-black shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform`}
      >
        <div className='flex justify-between items-center p-4 bg-primary  text-white'>
          <div className='flex items-center gap-1'>
            <GiBeachBag size={20} onClick={toggleCart} />
            <span className='text-xl'>{cart.length}</span>
          </div>
          <button
            onClick={toggleSidebar}
            className='text-white hover:transform hover:scale-150 transition-transform duration-200 ease-in-out'
            aria-label='Close Cart'
          >
            <IoClose size={24} />
          </button>
        </div>
        <CartMenu
          isSidebarOpen={isSidebarOpen}
          onClose={handleCloseCart}
          onCartToggle={toggleCart}
        />
      </div>
    </div>
  );
};

export default Cart;
