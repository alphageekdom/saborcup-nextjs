import React from 'react';
import Link from 'next/link';

const CategoryCard = ({ category }) => {
  return (
    <Link
      href={`/menu/${category.type}`}
      className='bg-white rounded-lg shadow-lg overflow-hidden custom-shadow'
    >
      <div className='relative'>
        <div
          className='h-64 bg-cover bg-center relative'
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className='absolute inset-0'>
            <div className='opacity-0 hover:opacity-90 absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-300'>
              <div className='text-white text-center p-4'>
                <h2 className='text-3xl font-semibold mb-2'>{category.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
