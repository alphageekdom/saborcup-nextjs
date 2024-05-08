import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import React from 'react';

const Homepage = () => {
  return (
    <div className='bg-white'>
      <Hero />
      <Welcome />
    </div>
  );
};

export default Homepage;
