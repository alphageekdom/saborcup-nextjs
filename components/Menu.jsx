'use client';

import { useEffect, useRef } from 'react';

import useCategories from './hooks/useCategories';

import Breadcrumbs from './common/Breadcrumbs';
import CategoryCard from './menu/CategoryCard';
import Spinner from './common/Spinner';
import ErrorMessage from './common/ErrorMessage';

const Menu = () => {
  const { categories, loading, error } = useCategories();
  const mountCount = useRef(0);

  useEffect(() => {
    console.log(`Menu mounted. Mount count: ${mountCount.current}`);
    mountCount.current++;
  }, []);

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage message={error} />;

  const breadcrumbItems = [{ title: 'Menu', path: '/menu' }];

  return (
    <div className='container mx-auto p-12'>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className='text-4xl font-bold text-center text-black mb-10'>
        Category
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-11'>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
