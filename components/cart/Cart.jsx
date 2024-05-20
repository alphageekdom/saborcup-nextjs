'use client';

import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartSidebar from './CartSidebar';
import { useCart } from '@/context/CartContext';

const Cart = ({
  onCartToggle,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  closeCart,
}) => {
  const { cart, fetchCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartChanged, setCartChanged] = useState(false);
  const [cartFetched, setCartFetched] = useState(false);

  useEffect(() => {
    if (isCartOpen && !cartFetched) {
      fetchCart();
      setCartFetched(true);
      setCartChanged(false);
    }
  }, [isCartOpen, cartFetched, fetchCart]);

  useEffect(() => {
    if (cartChanged) {
      fetchCart();
      setCartChanged(false);
    }
  }, [cartChanged, fetchCart]);

  const handleRemoveItem = (id) => {
    fetch('/api/cart/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then(() => {
        setCartChanged(true);
      })
      .catch((error) => console.error('Error removing item:', error));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;

    fetch('/api/cart/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, quantity }),
    })
      .then((res) => res.json())
      .then(() => {
        setCartChanged(true);
      })
      .catch((error) => console.error('Error updating quantity:', error));
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
      <CartSidebar
        cartItems={cart}
        isOpen={isCartOpen}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default Cart;
