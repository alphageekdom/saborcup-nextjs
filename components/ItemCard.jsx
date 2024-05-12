import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <Link
      href={`/menu/${item.type}`}
      className='bg-white rounded-lg shadow-lg overflow-hidden custom-shadow'
    >
      <div className='relative'>
        <div
          className='h-64 bg-cover bg-center relative'
          style={{ backgroundImage: `url(${item.images[0]})` }}
        >
          <div className='absolute inset-0'>
            <div className='opacity-0 hover:opacity-90 absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-300'>
              <div className='text-white text-center p-4'>
                <h2 className='text-3xl font-semibold mb-2'>{item.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    // <div className='bg-white rounded-lg shadow-lg overflow-hidden custom-shadow'>
    //   <div className='relative h-64'>
    //     <Image
    //       src={item.images[0]}
    //       alt={item.name}
    //       width={400}
    //       height={400}
    //       className='w-full h-full object-cover object-center'
    //     />
    //   </div>
    //   <div className='p-4'>
    //     <h2 className='text-xl font-semibold text-gray-800 mb-2'>
    //       {item.name}
    //     </h2>
    //     {item.type && <p className='text-gray-600 mb-2'>{item.type}</p>}
    //     <p className='text-gray-600 mb-4'>{item.description}</p>
    //     <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
    //       Details
    //     </button>
    //   </div>
    // </div>
  );
};

export default ItemCard;
