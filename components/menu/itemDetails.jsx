'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useCart } from '@/context/CartContext';
import toast from 'react-hot-toast';
import ErrorMessage from '../common/ErrorMessage';
import ButtonWithSpinner from '../common/ButtonSpinner';

const ItemDetails = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const sizeColors = ['bg-accent4', 'bg-accent5', 'bg-accent6'];

  useEffect(() => {
    if (product?.sizes?.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      toast.error('Please select a size.');
      return;
    }

    const price = product.prices[selectedSize];
    if (price === undefined) {
      toast.error('Price information is missing for the selected size.');
      return;
    }

    setLoading(true); // Set loading state to true
    try {
      const cartItem = {
        name: product.name,
        size: selectedSize,
        type: product.type,
        itemId: product.id,
        quantity,
        price: parseFloat(price),
        imageUrl: product.images[0],
      };

      await addToCart(cartItem); // Assume addToCart returns a promise
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    } finally {
      setLoading(false); // Set loading state to false after operation
    }
  };

  if (!product) return <ErrorMessage error='Product not found' />;

  return (
    <div className='mx-auto p-4 relative'>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-1/2 md:pr-8 relative'>
          <Image
            src={product.images[currentImageIndex]}
            alt={product.name}
            width={300}
            height={300}
            className='h-64 w-full md:w-full md:h-[500px] object-cover md:rounded-lg'
            priority
          />
          {product.images.length > 1 && (
            <div className='absolute top-1/2 transform -translate-y-1/2 flex items-center w-full'>
              <button
                onClick={() =>
                  setCurrentImageIndex((prevIndex) =>
                    prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
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
                    prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
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
          <h2 className='text-2xl font-bold text-left text-black mb-3'>
            {product.name}{' '}
            <span className='text-gray-600 t'>({product.type})</span>
          </h2>
          <p className='text-gray-600 text-lg mt-2'>{product.description}</p>
          <div className='flex items-center mt-4'>
            {Object.entries(product.prices).map(([size, price]) => (
              <p key={size} className='mr-2'>
                {size}: ${price.toFixed(2)}
              </p>
            ))}
          </div>

          <div className='mt-4'>
            {product?.sizes?.map((size, index) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`mx-2 px-4 py-2 rounded-md text-white font-medium ${
                  selectedSize === size
                    ? sizeColors[index % sizeColors.length]
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Select size ${size}`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className='mt-4'>
            <label htmlFor='quantity' className='text-gray-700'>
              Quantity:
            </label>
            <input
              type='number'
              id='quantity'
              value={quantity}
              onChange={(e) => handleQuantityChange(e)}
              min='1'
              className='ml-2 px-2 py-1 border border-gray-300 rounded mb-4 no-arrows'
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
