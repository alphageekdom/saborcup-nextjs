import React from 'react';
import Image from 'next/image';
import cafeLogo from '@/assets/images/SaborCupAlt.png';
import TwoColumnSection from './TwoColumnSection';

const Welcome = () => {
  return (
    <TwoColumnSection className='bg-white w-full h-full' id='welcome'>
      <div className='container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0'>
          <Image
            src={cafeLogo}
            alt='SaborCup Logo'
            width={200}
            height={300}
            className='w-60 mb-4'
          />
          <p className='text-lg md:text-xl text-black'>
            SaborCup stands as a beacon of Hispanic-owned excellence nestled in
            the vibrant Orange County community. Our passion lies in curating an
            unparalleled coffee experience, blending the finest beans with the
            rich tapestry of Latin <span className='italic'>cultura</span>.
          </p>
        </div>

        <div className='md:w-1/2 flex justify-center'>
          <figure className='relative max-w-sm'>
            <Image
              src='https://images.unsplash.com/photo-1604552914267-90a8d81a4254?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZmZlZXNob3B8ZW58MHx8MHx8fDA%3D'
              width={400}
              height={400}
              alt='Coffee'
              className='object-cover custom-shadow rounded-full md:rounded-lg w-96 h-96 md:w-auto md:h-auto'
              loading='lazy'
            />
            <div className='absolute inset-0 bg-black opacity-30 rounded-full md:rounded-lg'></div>
            <figcaption className='absolute px-4 text-lg text-white bottom-16 left-8 md:bottom-6'>
              <p>
                Our staff always busy curating the perfect{' '}
                <span className='italic'>cafecito</span>.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </TwoColumnSection>
  );
};

export default Welcome;
