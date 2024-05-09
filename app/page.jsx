import Events from '@/components/Events';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import React from 'react';

const Homepage = () => {
  return (
    <>
      <Hero />
      <div className='bg-white'>
        <Welcome />
      </div>
      <div className='bg-gray-50'>
        <Events />
      </div>
    </>
  );
};

export default Homepage;
