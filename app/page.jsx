import EventsInfo from '@/components/EventsInfo';
import FeaturedInfo from '@/components/FeaturedInfo';
import Hero from '@/components/Hero';
import StoreInfo from '@/components/StoreInfo';
import WelcomeInfo from '@/components/WelcomeInfo';
import React from 'react';

const Homepage = () => {
  return (
    <main>
      <Hero />
      <section className='bg-background'>
        <WelcomeInfo />
      </section>
      <hr className='border-gray-200 my-0 md:hidden' />
      <section className='bg-lightgray'>
        <EventsInfo />
      </section>
      <hr className='border-gray-200 my-0 md:hidden' />
      <section className='bg-background'>
        <FeaturedInfo />
      </section>
      <hr className='border-gray-200 my-0 md:hidden' />
      <section className='bg-lightgray'>
        <StoreInfo />
      </section>
    </main>
  );
};

export default Homepage;
