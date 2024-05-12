'use client';

import { useState, useEffect } from 'react';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeaderImage from '@/components/HeaderImage';
import CategoryCard from '@/components/CategoryCard';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const crumbs = [{ title: 'Menu', path: '/menu' }];

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/menu', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
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
    fetchCategories();
  }, []);

  return (
    <section className='bg-white'>
      <HeaderImage
        imageUrl='https://images.unsplash.com/photo-1577392648386-000e77cbc962?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZSUyMHNob3AlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww'
        overlayColor='black'
      >
        <h1 className='text-4xl md:text-5xl font-bold'>Our Menu</h1>
        <p className='text-lg md:text-xl'>
          We have a bit of everything freshly made everyday.
        </p>
      </HeaderImage>
      <div className='container mx-auto p-12'>
        <Breadcrumbs crumbs={crumbs} />
        <h1 className='text-4xl font-bold text-center text-black mb-10'>
          Menu
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-11'>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
