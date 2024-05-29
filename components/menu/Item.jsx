'use client';

import useProduct from '../../hooks/useProduct';

import ItemDetails from './itemDetails';
import ErrorMessage from '../common/ErrorMessage';
import Spinner from '../common/Spinner';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { useParams, usePathname } from 'next/navigation';

const Item = () => {
  const { item: productID, category } = useParams();
  const { product, loading, error } = useProduct(productID);

  const pathname = usePathname();

  if (!product) return <div>Product not found...</div>;
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  const breadcrumbItems = [
    { title: 'Menu', path: '/menu' },
    { title: `${product.type}`, path: `/menu/${category}` },
    {
      title: `${product.name}`,
      path: `${pathname}`,
    },
  ];

  return (
    <div className='container mx-auto p-12'>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className='text-4xl font-bold text-center text-black mb-10'>
        {product.name}
      </h1>
      <div className='rounded-lg shadow-lg md:shadow-none bg-white'>
        <ItemDetails product={product} />
      </div>
    </div>
  );
};

export default Item;
