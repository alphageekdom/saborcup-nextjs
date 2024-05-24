'use client';

import Spinner from '@/components/common/Spinner';
import { useState, useEffect, useCallback } from 'react';
import { useParams, usePathname } from 'next/navigation';

import Breadcrumbs from '@/components/common/Breadcrumbs';
import ErrorMessage from '@/components/common/ErrorMessage';

import Item from '@/components/Item';

const ItemPage = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pathname = usePathname();

  const { item: productID, category } = useParams();

  const fetchItem = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/product/${productID}`);

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
  }, [productID]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  const breadcrumbItems = [
    { title: 'Menu', path: '/menu' },
    { title: `${product?.type}`, path: `/menu/${category}` },
    {
      title: `${product?.name}`,
      path: `/menu/${category}/${productID}`,
    },
  ];

  console.log(productID);

  return (
    <div className='container mx-auto p-12'>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage error={error.message} />
      ) : !product ? (
        'Product not found...'
      ) : (
        <>
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className='text-4xl font-bold text-center text-black mb-10'>
            {product.name}{' '}
            {/* Assuming `item` is `product`, based on your context */}
          </h1>
          <div className='custom-shadow'>
            <Item product={product} />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemPage;
