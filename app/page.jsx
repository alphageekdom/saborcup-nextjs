import Events from '@/components/events/Events';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import React from 'react';

const Homepage = () => {
  return (
    <>
      <Hero />
      <div className='bg-background'>
        <Welcome />
      </div>
      <hr className='border-gray-200 my-0 md:hidden' />
      <div className='bg-lightgray'>
        <Events />
      </div>
    </>
  );
};

export default Homepage;
