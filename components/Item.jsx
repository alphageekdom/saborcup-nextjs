'use client';

import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { useCart } from '@/context/CartContext';
import ItemDetails from './menu/itemDetails';

const Item = ({ product }) => {
  const mountCount = useRef(0);

  useEffect(() => {
    console.log(`Component mounted. Mount count: ${mountCount.current}`);
    mountCount.current++;
  }, []);

  if (!product) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1 className='text-4xl font-bold text-center text-black mb-10'>
        {product?.name}
      </h1>
      <div className='custom-shadow'>
        <ItemDetails product={product} />
      </div>
    </div>
  );
};

export default Item;
