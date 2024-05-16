'use client';

import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartSidebar from './CartSidebar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
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

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <div className='flex items-center'>
        <FaShoppingCart
          className='text-white hover:text-blue-500 mb-3 md:mb-0 cursor-pointer transition duration-300 ease-in-out'
          size={24}
          onClick={toggleCart}
        />
      </div>
      <CartSidebar
        isOpen={isCartOpen}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
        onClose={toggleCart}
      />
    </>
  );
};

export default Cart;
