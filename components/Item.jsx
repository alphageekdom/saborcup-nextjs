'use client';

import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';

import { useCart } from '@/context/CartContext';
import ItemDetails from './menu/itemDetails';
import Spinner from './common/Spinner';
import ErrorMessage from './common/ErrorMessage';

const Item = ({ product }) => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const mountCount = useRef(0);

  const fetchItem = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/product/${product?.id}`);
      const itemData = await response.json();
      if (!response.ok) {
        throw new Error('Failed to fetch item');
      }
      setItem(itemData);
    } catch (error) {
      console.error('Error fetching item:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [product?.id, setError]);

  useEffect(() => {
    console.log(`Component mounted. Mount count: ${mountCount.current}`);
    mountCount.current++;
    fetchItem();
  }, [fetchItem]);

  if (!product) {
    return <ErrorMessage error='Product not found' />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }

  return (
    <div className='custom-shadow'>
      <ItemDetails item={item} error={error} loading={loading} />
    </div>
  );
};

export default Item;
