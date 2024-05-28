'use client';

import React from 'react';

import TwoColumnSection from './common/TwoColumnSection.jsx';

import useProducts from '../hooks/useProducts.js';
import Card from './common/Card.jsx';

const FeaturedInfo = () => {
  const { products, loading, error } = useProducts();

  const featuredProducts = products.filter(
    (product) => product.isFeatured == true
  );

  return (
    <TwoColumnSection className='w-full h-full'>
      <div className='container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0'>
        <div className='w-full md:w-1/2 flex flex-col items-center justify-center text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-primary'>
            Featured Drinks
          </h2>
          <p className='text-lg md:text-xl text-left text-black mb-8'>
            Explore our selection of signature drinks crafted to bring you the
            unique flavors of our heritage. Perfect for any time of the day!
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-11 w-full md:w-1/2'>
          {featuredProducts.map((product) => {
            const featuredType = product.type.replace(' ', '-').toLowerCase();
            return (
              <Card
                key={product.id}
                product={product}
                url={`/menu/${featuredType}/${product.id}`}
                backgroundImage={product.images[0]}
              />
            );
          })}
        </div>
      </div>
    </TwoColumnSection>
  );
};

export default FeaturedInfo;
