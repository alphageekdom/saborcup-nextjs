'use client';

import { useState, useEffect, useRef } from 'react';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let cacheRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      if (cacheRef.current) {
        setCategories(cacheRef.current);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/categories');

        if (!response.ok) {
          throw new Error('Failed to fetch categories.');
        }

        const data = await response.json();
        cacheRef.current = data;
        setCategories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [cacheRef]);

  return { categories, loading, error };
};

export default useCategories;
