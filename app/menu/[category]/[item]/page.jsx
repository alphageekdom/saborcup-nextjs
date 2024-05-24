'use client';

import Spinner from '@/components/common/Spinner';
import { useState, useEffect, useCallback } from 'react';
import { useParams, usePathname } from 'next/navigation';

import Breadcrumbs from '@/components/common/Breadcrumbs';
import ErrorMessage from '@/components/common/ErrorMessage';

import { convertToSerializeableObject } from '@/utils/convertToObject';
import Item from '@/components/Item';

const ItemPage = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const params = useParams();
  const pathname = usePathname();

  const { item } = useParams();

  const fetchItem = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/product/${params?.item}`);

      const itemData = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch item');
      }
      setProduct(itemData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [params?.item]);

  useEffect(() => {
    fetchItem();
  }, [params?.item, fetchItem]);

  const breadcrumbItems = [
    { title: 'Menu', path: '/menu' },
    { title: `${product?.type}`, path: `/menu/${params?.category}` },
    { title: `${product?.name}`, path: `${pathname}` },
  ];

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage />;
  return (
    <div className='container mx-auto p-12'>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className='text-4xl font-bold text-center text-black mb-10'>
        {item?.name}
      </h1>
      <div className='custom-shadow'>
        <Item product={product} />
      </div>
    </div>
  );
};

export default ItemPage;
