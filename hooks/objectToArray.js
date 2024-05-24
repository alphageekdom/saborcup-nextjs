import { useState, useEffect } from 'react';

const useObjectToArray = (object) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (object && typeof object === 'object') {
      const transformedArray = Object.entries(object).map(([key, value]) => ({
        key,
        value,
      }));
      setArray(transformedArray);
    }
  }, [object]);

  return array;
};

export default useObjectToArray;
