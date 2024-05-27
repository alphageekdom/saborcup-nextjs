'use client';

import React from 'react';

import { useEffect, useRef } from 'react';

import useProduct from '../../hooks/useProduct';

import ItemDetails from './itemDetails';
import ErrorMessage from '../common/ErrorMessage';
import Spinner from '../common/Spinner';

const Item = ({ productID }) => {
  const { product, loading, error } = useProduct(productID);
  const mountCount = useRef(0);

  useEffect(() => {
    console.log(`Component mounted. Mount count: ${mountCount.current}`);
    mountCount.current++;
  }, []);

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage error={error.message} />;

  if (!product) return <ErrorMessage error='Product not found' />;

  return (
    <div className='rounded-lg shadow-lg md:shadow-none bg-white'>
      <ItemDetails product={product} />
    </div>
  );
};

export default Item;
