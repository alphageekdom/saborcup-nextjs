'use client';

import { useState, useEffect } from 'react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeaderImage from '@/components/HeaderImage';
import BeverageCard from '@/components/BeverageCard';
import { usePathname } from 'next/navigation';
import Spinner from '@/components/Spinner';
import ErrorMessage from '@/components/ErrorMessage';

const MenuPage = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch('/api/menu', {
          cache: 'no-store',
        });
        if (!categoriesResponse.ok) {
          throw new Error('Failed to fetch categories');
        }
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        const itemsResponse = await fetch('/api/item', { cache: 'no-store' });
        if (!itemsResponse.ok) {
          throw new Error('Failed to fetch items');
        }
        const itemsData = await itemsResponse.json();
        setItems(itemsData);

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const paramTitle = pathname.split('/')[2];
  const formattedTitle = paramTitle
    ? paramTitle
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : '';

  const filteredData = items.filter((item) => item.type === formattedTitle);

  const category =
    categories.find((category) => category.name === formattedTitle) || {};
  const menuDescription = category.description || '';
  const headerImage = category.image || '';

  const crumbs = [
    { title: 'Menu', path: '/menu' },
    { title: formattedTitle, path: pathname },
  ];

  if (loading) {
    return <Spinner />;
  }

  if (error) return <ErrorMessage message={error} />;

  return (
    <section className='bg-white'>
      <HeaderImage imageUrl={headerImage || ''} overlayColor='black'>
        <h1 className='text-4xl md:text-5xl font-bold mb-3'>
          {formattedTitle}
        </h1>
        <p className='text-lg md:text-xl'>{menuDescription}</p>
      </HeaderImage>
      <div className='container mx-auto p-12'>
        <Breadcrumbs crumbs={crumbs} />
        <h1 className='text-4xl font-bold text-center text-black mb-10'>
          Menu
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-11'>
          {filteredData.map((item) => (
            <BeverageCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
