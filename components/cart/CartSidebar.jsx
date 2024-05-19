'use client';

import { IoClose } from 'react-icons/io5';

import { GiBeachBag } from 'react-icons/gi';
import { FaCheck } from 'react-icons/fa6';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Spinner from '../common/Spinner';
import toast from 'react-hot-toast';

const CartSidebar = ({ isOpen, cartItems, onRemoveItem, onUpdateQuantity }) => {
  const { cart, fetchCartItems, loading } = useCart();
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

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

    if (Array.isArray(cart)) {
      calculateTotal(cart);
    }
  }, [cart]);

  const confirmRemoveItem = (itemId) => {
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
              onRemoveItem(itemId);
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

  useEffect(() => {
    if (isOpen) {
      fetchCartItems();
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, fetchCartItems]);

  return (
    <div
      className={`right-0 h-screen bg-white shadow-lg transform transition-transform z-20 ${
        isOpen
          ? 'translate-x-0 right-[-21%] md:right-[-40%] w-screen md:w-96'
          : 'translate-x-full hidden'
      } w-[500px] h-full absolute top-[3.8rem] md:top-[3.8rem]`}
    >
      <div className='flex justify-between p-4 bg-primary text-white'>
        <h2 className='text-xl'>Cart</h2>
        <p className='flex items-center gap-1'>
          <GiBeachBag size={16} />
          <span className='text-xl'>{cartItems.length}</span>
        </p>
      </div>

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <ul className='p-4 overflow-y-auto max-h-[50vh]' id='items'>
          {cart.length === 0 ? (
            <li>
              <p className='text-center'>Your cart is empty</p>
            </li>
          ) : (
            cart.map((item, index) => (
              <li key={item.id} className='flex flex-col pt-4'>
                <div className='flex items-center justify-between'>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={64}
                    height={64}
                    className='w-16 h-16 object-cover'
                  />
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
                            -
                          </button>
                          <span className='px-2'>{item.quantity}</span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className='px-2 py-1 bg-gray-200'
                            aria-label='Increase Quantity'
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => confirmRemoveItem(item.id)}
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
      )}

      <div className='p-4 border-t'>
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

export default CartSidebar;
