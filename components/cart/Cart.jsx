'use client';

import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartSidebar from './CartSidebar';

const Cart = ({
  onCartToggle,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  closeCart,
}) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      console.log('Fetching cart items');
      fetch('/api/cart')
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setCartItems(data);
          } else {
            console.error('Fetched data is not an array:', data);
            setCartItems([]);
          }
        })
        .catch((error) => {
          console.error('Error fetching cart items:', error);
          setCartItems([]);
        });
    }
  }, [isCartOpen]);

  const handleRemoveItem = (id) => {
    fetch('/api/cart/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then(() => setCartItems(cartItems.filter((item) => item.id !== id)))
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
      .then((updatedItem) => {
        setCartItems(
          cartItems.map((item) => (item.id === id ? updatedItem : item))
        );
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
        isOpen={isCartOpen}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default Cart;
