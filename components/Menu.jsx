'use client';

import { useState, useEffect, useRef } from 'react';
import Breadcrumbs from './common/Breadcrumbs';
import CategoryCard from './menu/CategoryCard';
import Spinner from './common/Spinner';
import ErrorMessage from './common/ErrorMessage';

const Menu = ({ params }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mountCount = useRef(0);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/category');
      if (!response.ok) {
        throw new Error('Failed to fetch menu');
      }
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(`Menu mounted. Mount count: ${mountCount.current}`);
    mountCount.current++;
    fetchCategories();
  }, []);

  const breadcrumbItems = [{ title: 'Menu', path: '/menu' }];

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage message={error} />;
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