'use client';

import { useParams } from 'next/navigation';

import useProduct from '@/components/hooks/useProduct';

import Spinner from '@/components/common/Spinner';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ErrorMessage from '@/components/common/ErrorMessage';

import Item from '@/components/Item';

const ItemPage = () => {
  const { item: productID, category } = useParams();
  const { product, loading, error } = useProduct(productID);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!product) return <div>Product not found...</div>;

  const breadcrumbItems = [
    { title: 'Menu', path: '/menu' },
    { title: `${product.type}`, path: `/menu/${category}` },
    {
      title: `${product.name}`,
      path: `/menu/${category}/${productID}`,
    },
  ];

  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto p-12'>
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className='text-4xl font-bold text-center text-black mb-10'>
          {product.name}
        </h1>
        <Item productID={productID} />
      </div>
    </div>
  );
};

export default ItemPage;
