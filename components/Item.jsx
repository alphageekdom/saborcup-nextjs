'use client';

import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';

import { useParams, usePathname } from 'next/navigation';

import Breadcrumbs from './common/Breadcrumbs';
import Spinner from './common/Spinner';
import ErrorMessage from './common/ErrorMessage';
import ItemDetails from './menu/itemDetails';

const Item = ({ product }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  const pathname = usePathname();

  const mountCount = useRef(0);

  console.log(params);

  const fetchItem = useCallback(async () => {
    try {
      const response = await fetch(`/api/product/${params?.item}`);

      if (!response.ok) {
        throw new Error('Failed to fetch item');
      }
      const itemData = await response.json();
      setItem(itemData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [params?.id]);

  useEffect(() => {
    console.log(`Component mounted. Mount count: ${mountCount.current}`);
    mountCount.current++;
    fetchItem();
  }, [fetchItem]);

  // if (!item) {
  //   return <div>Item not found</div>;
  // }

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1 className='text-4xl font-bold text-center text-black mb-10'>
        {item.name}
      </h1>
      <div className='custom-shadow'>
        <ItemDetails item={item} />
      </div>
    </div>
  );
};

export default Item;
