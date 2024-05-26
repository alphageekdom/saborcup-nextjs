'use client';

import { useState, useEffect, useCallback } from 'react';

import { usePathname } from 'next/navigation';

import { useCart } from '@/context/CartContext';

import { IoClose } from 'react-icons/io5';
import { GiBeachBag } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';

import CartMenu from './CartMenu';
import Checkout from './Checkout';

const Cart = ({ isMobileMenuOpen, setIsMobileMenuOpen, closeCart }) => {
  const { cart, fetchCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const pathname = usePathname();

  const toggleCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

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
      <button onClick={toggleSidebar} aria-label='View Shopping Cart'>
        <FaShoppingCart
          className='mb-0 cursor-pointer transition duration-300 ease-in-out text-white hover:text-primary'
          size={24}
        />
      </button>
      <div
        className={`fixed top-0 right-0 w-96  h-full bg-white text-black shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform z-50`}
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
        {isCheckoutOpen ? (
          <Checkout onCheckoutToggle={toggleCheckout} />
        ) : (
          <CartMenu
            isSidebarOpen={isSidebarOpen}
            onClose={handleCloseCart}
            onCartToggle={toggleCart}
            onCheckoutToggle={toggleCheckout}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
