import { useState } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const ItemDetail = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    // Implement your add to cart functionality here
    console.log(`Added ${item.name} in size ${selectedSize} to cart`);
  };

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
            priority
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
            {Object.entries(item.prices).map(([size, price]) => (
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
            <label htmlFor='size' className='text-gray-700'>
              Select Size:
            </label>
            <select
              id='size'
              value={selectedSize}
              onChange={handleSizeChange}
              className='ml-2 px-2 py-1 border border-gray-300 rounded mb-4'
            >
              {item.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddToCart}
            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;