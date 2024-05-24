'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { convertToSerializeableObject } from '@/utils/convertToObject';

import HeaderImage from '@/components/common/HeaderImage';
import Category from '@/components/Category';
import Spinner from '@/components/common/Spinner';
import ErrorMessage from '@/components/common/ErrorMessage';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pathname = usePathname();
  const path = pathname.split('/')[2];

  const fetchCategory = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/category');
      if (!response.ok) {
        throw new Error('Failed to fetch category');
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
    fetchCategory();
  }, []);

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage />;

  const title = categories
    .map((category) => category)
    .find((item) => item?.type === path);

  const category = convertToSerializeableObject(categories);

  return (
    <section className='bg-white'>
      <HeaderImage
        imageUrl={
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        overlayColor='black'
      >
        <h1 className='text-4xl md:text-5xl font-bold mb-3'>{title?.name}</h1>
        <p className='text-lg md:text-xl'>{title?.description}</p>
      </HeaderImage>
      <div className='container mx-auto p-12'>
        <Category category={category} />
      </div>
    </section>
  );
};

export default CategoryPage;
