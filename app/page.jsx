import Events from '@/components/events/Events';
import Featured from '@/components/Featured';
import Hero from '@/components/Hero';
import StoreInfo from '@/components/StoreInfo';
import Welcome from '@/components/Welcome';
import React from 'react';

const Homepage = () => {
  return (
    <>
      <Hero />
      <section className='bg-background'>
        <Welcome />
      </section>
      <hr className='border-gray-200 my-0 md:hidden' />
      <section className='bg-lightgray'>
        <Events />
      </section>
      <hr className='border-gray-200 my-0 md:hidden' />
      <section className='bg-background'>
        <Featured />
      </section>
      <hr className='border-gray-200 my-0 md:hidden' />
      <section className='bg-lightgray'>
        <StoreInfo />
      </section>
    </>
  );
};

export default Homepage;
