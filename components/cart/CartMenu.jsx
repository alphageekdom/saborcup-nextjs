'use client';

import { IoClose } from 'react-icons/io5';
import { GiBeachBag } from 'react-icons/gi';
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const CartMenu = ({
  isOpen,
  cartItems,
  onRemoveItem,
  handleClearCart,
  onUpdateQuantity,
}) => {
  const { cart } = useCart();
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const [scrollY, setScrollY] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [fixedNavbarHeight, setFixedNavbarHeight] = useState(0);

  useEffect(() => {
    console.log('Cart Sidebar: cartItems', cart);
    if (!Array.isArray(cart)) {
      console.error('Cart is not an array:', cart);
    }
  }, [cart]);

  useEffect(() => {
    const calculateTotal = (items) => {
      let total = 0;
      items.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotal(total);
      const taxRate = 0.08;
      setTaxes(total * taxRate);
      setGrandTotal(total + total * taxRate);
    };

    if (Array.isArray(cartItems)) {
      calculateTotal(cartItems);
    }
  }, [cartItems]);

  const confirmRemoveItem = (item) => {
    toast(
      (t) => (
        <span
          style={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Delete item from cart?
          <button
            onClick={() => {
              onRemoveItem(item.id);
              toast.dismiss(t.id);
            }}
            className='ml-2'
            style={{
              color: 'white',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label='Confirm deletion'
          >
            <FaCheck className='over:transform hover:scale-150 transition-transform duration-200 ease-in-out' />
          </button>
        </span>
      ),
      {
        style: {
          background: '#0D92FF',
          color: '#fff',
        },
      }
    );
  };

  const confirmClearCart = () => {
    toast(
      (t) => (
        <span
          style={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Clear all items from cart?
          <button
            onClick={() => {
              handleClearCart();
              toast.dismiss(t.id);
            }}
            className='ml-2'
            style={{
              color: 'white',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label='Confirm clear all'
          >
            <FaCheck className='hover:transform hover:scale-150 transition-transform duration-200 ease-in-out' />
          </button>
        </span>
      ),
      {
        style: {
          background: '#0D92FF',
          color: '#fff',
        },
      }
    );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  useEffect(() => {
    const navbar = document.querySelector('.sticky-navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    } else {
      setNavbarHeight(navbar.offsetHeight - 55);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    const navbar = document.querySelector('.sticky-navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight + 52);
    }

    const fixedNavbar = document.querySelector('.fixed-navbar');
    if (fixedNavbar) {
      setFixedNavbarHeight(fixedNavbar.offsetHeight);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cartTop = scrollY > 100 ? fixedNavbarHeight : navbarHeight;

  console.log(cartItems);

  return (
    <div
      className={`fixed top-42 right-0 max-h-full h-[500px] bg-white shadow-lg transform transition-transform z-20 ${
        isOpen
          ? 'translate-x-0 overflow-y-auto w-screen md:w-96'
          : 'translate-x-full hidden'
      }`}
      style={{ top: `${cartTop}px` }}
    >
      <div className='flex justify-between p-4 bg-primary text-white'>
        <h2 className='text-xl'>Cart</h2>
        <p className='flex items-center gap-1'>
          <GiBeachBag size={16} />
          <span className='text-xl'>{cartItems.length}</span>
        </p>
      </div>

      <ul className='p-4 overflow-y-auto max-h-[50vh]' id='items'>
        {cartItems.length === 0 ? (
          <li className='flex justify-center items-center h-full'>
            <p className='text-center'>Your cart is empty</p>
          </li>
        ) : (
          cartItems.map((item, index) => (
            <li key={item.id} className='flex flex-col pt-4'>
              <div className='flex items-center justify-evenly'>
                <Link
                  href={`/menu/${item.type
                    .toLowerCase()
                    .split(' ')
                    .join('-')}/${item.itemId}`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={64}
                    height={64}
                    className='w-16 h-16 object-cover'
                  />
                </Link>
                <div className='flex-1 ml-4'>
                  <div className='flex justify-between'>
                    <div>
                      <h3 className='text-lg'>{item.name}</h3>
                      <p className='italic text-gray-500'>{item.size}</p>
                    </div>
                    <div className='flex flex-row mr-8 justify-center items-center'>
                      <p className='mr-2'>${item.price.toFixed(2)} x</p>
                      <div className='flex items-center justify-end'>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className='px-2 py-1 bg-gray-200'
                          aria-label='Decrease Quantity'
                        >
                          <FaMinus />
                        </button>
                        <span className='px-2'>{item.quantity}</span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className='px-2 py-1 bg-gray-200'
                          aria-label='Increase Quantity'
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => confirmRemoveItem(item)}
                  className='text-red-500 hover:transform hover:scale-150 transition-transform duration-200 ease-in-out'
                  aria-label='Remove Item'
                >
                  <IoClose size={24} />
                </button>
              </div>
              {index < cartItems.length - 1 && (
                <hr className='mt-4 border-t border-gray-200' />
              )}
            </li>
          ))
        )}
      </ul>

      <div className='p-4 border-t'>
        <div className='flex justify-end items-center mb-4'>
          <button
            onClick={confirmClearCart}
            disabled={cartItems.length === 0}
            className={`px-4 py-2 ${
              cartItems.length === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-red-500 text-white'
            } rounded`}
          >
            Clear All
          </button>
        </div>
        <p className='flex justify-between'>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </p>
        <p className='flex justify-between'>
          <span>Taxes:</span>
          <span>${taxes.toFixed(2)}</span>
        </p>
        <p className='flex justify-between font-bold'>
          <span>Grand Total:</span>
          <span>${grandTotal.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartMenu;
