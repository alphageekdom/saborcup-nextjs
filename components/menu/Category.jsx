'use client';

import { useEffect, useRef } from 'react';

import { useParams, usePathname } from 'next/navigation';

import useProducts from '../../hooks/useProducts';

import Breadcrumbs from '../common/Breadcrumbs';
import Spinner from '../common/Spinner';
import ErrorMessage from '../common/ErrorMessage';
import Card from '../common/Card';

const Category = ({ category }) => {
  const params = useParams();
  const { category: productId } = useParams();

  const { products, loading, error } = useProducts();

  const pathname = usePathname();

  const mountCount = useRef(0);

  useEffect(() => {
    console.log(`Category mounted. Mount count: ${mountCount.current}`);
    mountCount.current++;
  }, []);

  const title = category.find((type) => type.type === params?.category);

  const breadcrumbItems = [
    { title: 'Menu', path: '/menu' },
    { title: `${title?.name}`, path: `/menu/${productId}` },
  ];

  const filteredProducts = products.filter((item) => item.type === title?.name);

  if (!filteredProducts) return 'No products...';

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className='text-4xl font-bold text-center text-black mb-10'>
        {title?.name}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-11'>
        {filteredProducts.map((product) => (
          <Card
            key={product?.id}
            product={product}
            url={`${pathname}/${product.id}`}
            backgroundImage={product.images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
