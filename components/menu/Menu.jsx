'use client';

import { useEffect, useRef } from 'react';

import useCategories from '../../hooks/useCategories';
import useProducts from '../../hooks/useProducts';

import Breadcrumbs from '../common/Breadcrumbs';
import Spinner from '../common/Spinner';
import ErrorMessage from '../common/ErrorMessage';
import { usePathname } from 'next/navigation';
import Card from '../common/Card';

const Menu = () => {
  const { categories, loading, error } = useCategories();
  const { products } = useProducts();
  const mountCount = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    console.log(`Menu mounted. Mount count: ${mountCount.current}`);
    mountCount.current++;
  }, []);

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage message={error} />;

  const breadcrumbItems = [{ title: 'Menu', path: '/menu' }];

  const featuredProducts = products.filter(
    (product) => product.isFeatured == true
  );

  const featuredType = featuredProducts.map((product) =>
    product.type.replace(' ', '-').toLowerCase()
  );

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <div>
        <h1 className='text-4xl font-bold text-center text-black mb-10'>
          Signature Drinks
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-11'>
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              product={product}
              url={`${pathname}/${featuredType}/${product.id}`}
              backgroundImage={product.images[0]}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className='text-4xl font-bold text-center text-black mb-10'>
          Category
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-11'>
          {categories.map((category) => (
            <Card
              key={category.id}
              product={category}
              url={`${pathname}/${category.type}`}
              backgroundImage={category.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
