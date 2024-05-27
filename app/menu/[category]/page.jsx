'use client';

import { usePathname } from 'next/navigation';

import useCategories from '@/hooks/useCategories';

import { convertToSerializeableObject } from '@/utils/convertToObject';

import HeaderImage from '@/components/common/HeaderImage';
import Category from '@/components/menu/Category';
import Spinner from '@/components/common/Spinner';
import ErrorMessage from '@/components/common/ErrorMessage';

const CategoryPage = () => {
  const { categories, loading, error } = useCategories();

  const pathname = usePathname();
  const path = pathname.split('/')[2];

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage />;

  const title = categories
    .map((category) => category)
    .find((item) => item?.type === path);

  const category = convertToSerializeableObject(categories);

  return (
    <section>
      <HeaderImage
        imageUrl={
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
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
