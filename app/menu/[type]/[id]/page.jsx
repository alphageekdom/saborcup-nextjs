'use client';

import { useState, useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import React from 'react';
import Spinner from '@/components/Spinner';
import ItemDetail from '@/components/ItemDetail';

const ItemPage = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const pathname = usePathname();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`/api/item/${params?.id}`, {
          cache: 'no-store',
        });

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
    };

    fetchItem();
  }, [params.id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  const crumbs = [
    { title: 'Menu', path: '/menu' },
    { title: `${item.type}`, path: `/menu/${params.type}` },
    { title: `${item.name}`, path: `${pathname}` },
  ];

  return (
    <section>
      <div className='container mx-auto p-12'>
        <Breadcrumbs crumbs={crumbs} />
        <h1 className='text-4xl font-bold text-center text-black mb-10'>
          {item.name}
        </h1>
        <div className='custom-shadow'>
          <ItemDetail key={item.id} item={item} />
        </div>
      </div>
    </section>
  );
};

export default ItemPage;
