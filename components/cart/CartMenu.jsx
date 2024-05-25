'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useCart } from '@/context/CartContext';

import { FaCheck, FaPlus, FaMinus, FaTrash } from 'react-icons/fa6';
import toast from 'react-hot-toast';

const CartMenu = ({ isSidebarOpen }) => {
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const [navbarHeight, setNavbarHeight] = useState(0);

  const { cart, removeFromCart, updateCartItemQuantity, fetchCart, clearCart } =
    useCart();

  useEffect(() => {
    if (isSidebarOpen) {
      fetchCart();
    }
  }, [isSidebarOpen, fetchCart]);

  useEffect(() => {
    const navbar = document.querySelector('.sticky-navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    } else {
      setNavbarHeight(navbar.offsetHeight - 50);
    }
  }, []);

  useEffect(() => {
    const calculateTotal = (items) => {
      let total = 0;
      items.forEach((item) => {
        if (item && item.price && item.quantity) {
          total += item.price * item.quantity;
        }
      });
      setTotal(total);
      const taxRate = 0.08;
      setTaxes(total * taxRate);
      setGrandTotal(total + total * taxRate);
    };

    if (Array.isArray(cart) && cart.length > 0) {
      calculateTotal(cart);
    } else {
      setTotal(0);
      setTaxes(0);
      setGrandTotal(0);
    }
  }, [cart]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
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
              clearCart();
              toast.dismiss(t?.id);
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

  return (
    <div
      className={`bg-opacity-50 h-full z-40 ${
        isSidebarOpen ? 'block' : 'hidden'
      }`}
    >
      <div
        className={`transform transition-transform  ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: navbarHeight }}
      >
        <ul className='p-4 overflow-y-auto max-h-[65vh]' id='items'>
          {cart?.length === 0 ? (
            <li className='flex justify-center items-center h-full'>
              <p className='text-center'>Your cart is empty</p>
            </li>
          ) : (
            cart?.map((item, index) => (
              <li key={index} className='flex flex-col pt-4'>
                <div className='flex items-center justify-evenly'>
                  <Link
                    href={`/menu/${
                      item?.type?.replace(' ', '-').toLowerCase() || ''
                    }/${item?.itemId}`}
                  >
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={300}
                        height={300}
                        className='object-cover w-16 h-16 rounded-lg'
                        priority
                      />
                    ) : (
                      <div className='placeholder-image'>
                        No image available
                      </div>
                    )}
                  </Link>
                  <div className='flex-1 ml-4'>
                    <div className='flex justify-between'>
                      <div>
                        <h3 className='text-lg'>{item?.name}</h3>
                        <p className='italic text-gray-500'>{item?.size}</p>
                      </div>
                      <div className='flex flex-row mr-8 justify-center items-center'>
                        <p className='mr-2'>${item?.price?.toFixed(2)} x</p>
                        <div className='flex items-center justify-end'>
                          <button
                            onClick={() =>
                              item?.quantity > 1 &&
                              updateCartItemQuantity(
                                item?.id,
                                item?.quantity - 1
                              )
                            }
                            className='px-2 py-1 bg-gray-200 rounded-l-md'
                            aria-label='Decrease Quantity'
                          >
                            <FaMinus />
                          </button>
                          <span className='px-2'>{item?.quantity}</span>
                          <button
                            onClick={() =>
                              updateCartItemQuantity(
                                item?.id,
                                item?.quantity + 1
                              )
                            }
                            className='px-2 py-1 bg-gray-200 rounded-r-md'
                            aria-label='Increase Quantity'
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='text-red-500 hover:text-red-600 hover:transform'
                    aria-label='Remove Item'
                  >
                    <FaTrash size={24} />
                  </button>
                </div>
                {index < cart?.length - 1 && (
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
              disabled={cart?.length === 0}
              className={`px-4 py-2 ${
                cart.length === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              } rounded`}
            >
              Clear All
            </button>
          </div>
          <p className='flex justify-between'>
            <span>Total:</span>
            <span className='tracking-wider'>{formatCurrency(total)}</span>
          </p>
          <p className='flex justify-between'>
            <span>Taxes:</span>
            <span className='tracking-wider'>{formatCurrency(taxes)}</span>
          </p>
          <p className='flex justify-between font-bold'>
            <span>Grand Total:</span>
            <span className='tracking-wider'>{formatCurrency(grandTotal)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
