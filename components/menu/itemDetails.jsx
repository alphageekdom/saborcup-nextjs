'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useCart } from '@/context/CartContext';
import toast from 'react-hot-toast';
import ErrorMessage from '../common/ErrorMessage';
import ButtonWithSpinner from '../common/ButtonSpinner';
import { useParams, usePathname } from 'next/navigation';

const ItemDetails = ({ item, loading, error }) => {
  const [product, setProduct] = useState();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(item?.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const params = useParams();
  const pathname = usePathname();

  const { item: productId } = params;

  const fetchProduct = useCallback(async () => {
    try {
      const response = await fetch(`/api/product/${productId}`);
      const itemData = await response.json();
      if (!response.ok) {
        throw new Error('Failed to fetch item');
      }
      setProduct(itemData);
    } catch (error) {
      console.error('Error fetching item:', error.message);
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      fetchProduct(productId);
    }
  }, [fetchProduct, productId]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddWhatIsSelected = async () => {
    if (!selectedSize) {
      toast.error('Please select a size.');
      return;
    }

    const price = item.prices[selectedSize];
    if (price === undefined) {
      toast.error('Price information is missing for the selected size.');
      return;
    }

    const cartItem = {
      name: item.name,
      size: selectedSize,
      type: item.type,
      itemId: item.id,
      quantity,
      price: parseFloat(price),
      imageUrl: item.images[0],
    };

    addToCart(cartItem);
    toast.success('Item added to cart!');
  };

  if (!item) return 'No item found...';

  if (error) return <ErrorMessage error={error.message} />;

  return (
    <div className='mx-auto p-4 relative'>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='md:w-1/2 md:pr-8 relative'>
          <Image
            src={item.images[currentImageIndex]}
            alt={item.name}
            width={300}
            height={300}
            className='h-64 w-64 md:w-full md:h-[500px] object-cover md:rounded-lg'
            loading='lazy'
          />
          {item.images.length > 1 && (
            <div className='absolute top-1/2 transform -translate-y-1/2 flex items-center w-full'>
              <button
                onClick={() =>
                  setCurrentImageIndex((prevIndex) =>
                    prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
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
                    prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
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
          <p className='text-gray-600 text-lg mt-2'>{item.type}</p>
          <div className='flex items-center mt-4'>
            {Object?.entries(item?.prices).map(([size, price]) => (
              <p key={size} className='mr-2'>
                {size}: ${price.toFixed(2)}
              </p>
            ))}
          </div>
          <p className='text-gray-700 mt-2'>
            Availability: {item.availability}
          </p>
          <p className='text-gray-700 mt-4'>{item.description}</p>

          <div className='mt-4'>
            {item?.sizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`mx-2 px-4 py-2 rounded-full text-white font-medium ${
                  selectedSize === size
                    ? 'bg-blue-500'
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
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
              min='1'
              className='ml-2 px-2 py-1 border border-gray-300 rounded mb-4'
            />
          </div>

          <button
            onClick={handleAddWhatIsSelected}
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
