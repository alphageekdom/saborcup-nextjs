'use client';

import { useState, useEffect, useRef } from 'react';

import { useParams, usePathname } from 'next/navigation';

import Breadcrumbs from './common/Breadcrumbs';
import ProductCard from './menu/ProductCard';
import Spinner from './common/Spinner';
import ErrorMessage from './common/ErrorMessage';

const Category = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();

  const { category: productId } = useParams();

  const mountCount = useRef(0);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/product');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(`Category mounted. Mount count: ${mountCount.current}`);
    mountCount.current++;
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  if (error) return <ErrorMessage message={error} />;

  const title = category.find((type) => type.type === params?.category);

  const breadcrumbItems = [
    { title: 'Menu', path: '/menu' },
    { title: `${title?.name}`, path: `/menu/${productId}` },
  ];

  const filteredProducts = products.filter(
    (product) => product.type === title?.name
  );

  if (loading) return <Spinner />;

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className='text-4xl font-bold text-center text-black mb-10'>
        {title?.name}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-11'>
        {filteredProducts.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
