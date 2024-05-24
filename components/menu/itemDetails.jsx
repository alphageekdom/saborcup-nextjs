'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useCart } from '@/context/CartContext';
import toast from 'react-hot-toast';
import Spinner from '../common/Spinner';
import ErrorMessage from '../common/ErrorMessage';
import ButtonWithSpinner from '../common/ButtonSpinner';

const ItemDetails = ({ product }) => {
  const { addToCart, loading, error } = useCart();
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = async () => {
    const cartItem = {
      name: product?.name,
      size: selectedSize,
      type: product?.type,
      itemId: product?.id,
      quantity,
      price: parseFloat(product?.prices[selectedSize]),
      imageUrl: product?.images[0],
    };

    addToCart(cartItem);
    toast.success('Item added to cart!');
  };

  // if (loading) return <Spinner />;

  // if (error) return <ErrorMessage />;

  if (!product) return 'Not product found...';

  return (
    <div className='mx-auto p-4 relative'>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='md:w-1/2 md:pr-8 relative'>
          <Image
            src={product?.images[currentImageIndex]}
            alt={product?.name}
            width={300}
            height={300}
            className='h-64 w-64 md:w-full md:h-[500px] object-cover md:rounded-lg'
            loading='lazy'
          />
          {product?.images?.length > 1 && (
            <div className='absolute top-1/2 transform -translate-y-1/2 flex items-center w-full'>
              <button
                onClick={() =>
                  setCurrentImageIndex((prevIndex) =>
                    prevIndex === 0
                      ? product?.images?.length - 1
                      : prevIndex - 1
                  )
                }
                className='text-white px-2 py-1 rounded-full flex items-center justify-center ml-0 md:ml-2 left-0 absolute transition duration-300 ease-in-out opacity-50 hover:opacity-100'
                style={{ left: 0 }}
              >
                <MdKeyboardArrowLeft size={60} />
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex((prevIndex) =>
                    prevIndex === product?.images?.length - 1
                      ? 0
                      : prevIndex + 1
                  )
                }
                className='text-white px-2 py-1 rounded-full flex items-center justify-center right-0 mr-0 md:mr-12 absolute transition duration-300 ease-in-out opacity-50 hover:opacity-100'
                style={{ right: 0 }}
              >
                <MdKeyboardArrowRight size={60} />
              </button>
            </div>
          )}
        </div>

        <div className='md:w-1/2 mt-4 md:mt-0'>
          <p className='text-gray-600 text-lg mt-2'>{product?.type}</p>
          <div className='flex items-center mt-4'>
            {Object?.entries(product?.prices).map(([size, price]) => (
              <p key={size} className='mr-2'>
                {size}: ${price?.toFixed(2)}
              </p>
            ))}
          </div>
          <p className='text-gray-700 mt-2'>
            Availability: {product?.availability}
          </p>
          <p className='text-gray-700 mt-4'>{product?.description}</p>

          <div className='mt-4'>
            <label htmlFor='size' className='text-gray-700'>
              Select Size:
            </label>
            <select
              id='size'
              value={selectedSize}
              onChange={handleSizeChange}
              className='ml-2 px-2 py-1 border border-gray-300 rounded mb-4'
            >
              {product?.sizes?.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className='mt-4'>
            <label htmlFor='quantity' className='text-gray-700'>
              Quantity:
            </label>
            <input
              type='number'
              id='quantity'
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min='1'
              className='ml-2 px-2 py-1 border border-gray-300 rounded mb-4'
            />
          </div>

          <button
            onClick={handleAddToCart}
            className='bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg flex items-center justify-center'
            aria-label='Add to Cart'
            disabled={loading}
          >
            {loading ? <ButtonWithSpinner /> : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
