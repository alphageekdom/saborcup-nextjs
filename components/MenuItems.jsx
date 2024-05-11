'use client';
import React from 'react';
import BeverageCard from './BeverageCard';

const MenuItems = () => {
  const handleDetailsClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {/* Hot Coffee */}
      <BeverageCard
        image='https://placehold.co/600x400'
        name='Hot Coffee'
        type='Coffee'
        sizes={['Small', 'Medium', 'Large']}
        prices={['$2.99', '$3.99', '$4.99']}
        onDetailsClick={() => handleDetailsClick('Hot Coffee')}
      />

      {/* Cold Coffee */}
      <BeverageCard
        image='https://placehold.co/600x400'
        name='Cold Coffee'
        type='Coffee'
        sizes={['Small', 'Medium', 'Large']}
        prices={['$3.49', '$4.49', '$5.49']}
        onDetailsClick={() => handleDetailsClick('Cold Coffee')}
      />

      {/* Hot and Cold Tea */}
      <BeverageCard
        image='https://placehold.co/600x400'
        name='Hot and Cold Tea'
        type='Tea'
        sizes={['Small', 'Medium', 'Large']}
        prices={['$2.79', '$3.79', '$4.79']}
        onDetailsClick={() => handleDetailsClick('Hot and Cold Tea')}
      />

      {/* Lemonades */}
      <BeverageCard
        image='https://placehold.co/600x400'
        name='Lemonades'
        type='Lemonade'
        sizes={['Small', 'Medium', 'Large']}
        prices={['$2.99', '$3.99', '$4.99']}
        onDetailsClick={() => handleDetailsClick('Lemonades')}
      />

      {/* Bakery */}
      <BeverageCard
        image='https://placehold.co/600x400'
        name='Bakery'
        type='Bakery'
        sizes={['Small', 'Medium', 'Large']}
        prices={['$1.99', '$2.99', '$3.99']}
        onDetailsClick={() => handleDetailsClick('Bakery')}
      />
    </div>
  );
};

export default MenuItems;
