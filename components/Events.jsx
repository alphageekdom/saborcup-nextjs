import React from 'react';
import Image from 'next/image';
import TwoColumnSection from './TwoColumnSection';
import Link from 'next/link';

const Events = () => {
  return (
    <TwoColumnSection className='w-full h-full' id='events'>
      <div className='container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-1/2 flex justify-center mb-8'>
          <figure className='relative max-w-sm'>
            <Image
              src='https://images.unsplash.com/photo-1553184570-557b84a3a308?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRpYSUyMGRlJTIwbG9zJTIwbXVlcnRvc3xlbnwwfHwwfHx8MA%3D%3D'
              width={400}
              height={400}
              alt='Events'
              className='object-cover custom-shadow rounded-full md:rounded-lg w-96 h-96'
              loading='lazy'
            />
            <div className='absolute inset-0 bg-black opacity-30 rounded-full md:rounded-lg'></div>
          </figure>
        </div>
        <div className='md:w-1/2 flex flex-col items-center justify-center text-center md:order-2'>
          <h2 className='text-3xl md:text-4xl font-bold text-blue-600 mb-4'>
            Discover Our Events
          </h2>
          <p className='text-lg md:text-xl text-black mb-8'>
            Experience the vibrant culture of SaborCup through our exciting
            events. From coffee tastings to cultural celebrations, there{`'`}s
            something for everyone to enjoy.
          </p>
          <Link
            href='/events'
            className='bg-[#0A93FE] hover:bg-[#0877cc]  text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg'
          >
            Explore
          </Link>
        </div>
      </div>
    </TwoColumnSection>
  );
};

export default Events;