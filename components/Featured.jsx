'use client';

import React from 'react';

import TwoColumnSection from './common/TwoColumnSection';

import useProducts from '../hooks/useProducts.js';
import ProductCard from './menu/ProductCard';

const Featured = () => {
  const { products, loading, error } = useProducts();

  const featuredProducts = products.filter(
    (product) => product.isFeatured == true
  );

  console.log(featuredProducts);

  return (
    <TwoColumnSection className='w-full h-full'>
      <div className='container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between'>
        <div className='w-1/2 flex flex-col items-center justify-center text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 text-primary'>
            Featured Drinks
          </h2>
          <p>
            Explore our selection of signature drinks crafted to bring you the
            unique flavors of our heritage. Perfect for any time of the day!
          </p>
        </div>
        <div className='flex-1 grid grid-cols-2 gap-4 w:1/2'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </TwoColumnSection>
  );
};

export default Featured;
