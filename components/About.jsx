import React from 'react';

import Image from 'next/image';

import TwoColumnSection from '@/components/common/TwoColumnSection';

const About = () => {
  return (
    <main className='min-h-screen text-black bg-background'>
      {/* First Section */}
      <div className='bg-lightgray'>
        <TwoColumnSection>
          <div className='md:w-1/2'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 tracking-wider text-accent1'>
              Our Story
            </h2>
            <p className='text-base md:text-lg'>
              Nestled in the heart of Orange County, California, our{' '}
              <span className='italic'>Hispanic/Mexican-American</span>-owned
              coffee shop was founded with a passion for the highest quality
              coffee and a deep connection to community. Our journey began with
              a vision to create a warm and welcoming environment where modern
              meets Hispanic cultural decor. We aim to bring people together
              through exceptional coffee, baked goods, and monthly events.
            </p>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <figure className='relative max-w-sm'>
              <Image
                src='https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8Mg%3D%3D'
                alt='Our Story Image'
                width={600}
                height={400}
                className='object-cover custom-shadow rounded-full md:rounded-lg w-96 h-96 md:w-auto md:h-auto'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-black opacity-20 rounded-full md:rounded-lg'></div>
              <figcaption className='absolute px-4 text-xl text-white bottom-16 left-8 md:bottom-6'>
                <p className='font-bold'>
                  A cozy place where modern meets{' '}
                  <span className='italic font-bold'>Hispanic</span> culture.
                </p>
              </figcaption>
            </figure>
          </div>
        </TwoColumnSection>
      </div>

      <hr className='border-gray-200 my-0 md:hidden' />

      {/* Second Section */}
      <div className='bg-background'>
        <TwoColumnSection reverseOnMobile>
          <div className='md:w-1/2'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 tracking-wider text-accent2'>
              Our Vision
            </h2>
            <p className='text-base md:text-lg'>
              Our vision is to create a place where anyone can come to relax,
              work, or connect with friends while enjoying the best coffee and
              baked goods in town. We source high-quality coffee, teas, and
              ingredients from local farmers and businesses to support our
              community. We offer a variety of vegan options and accommodate
              most dietary needs, ensuring there{`'`}s something for everyone.
            </p>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <figure className='relative max-w-sm'>
              <Image
                src='https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDI%3D'
                alt='Our Vision Image'
                width={600}
                height={400}
                className='object-cover custom-shadow rounded-full md:rounded-lg w-96 h-96 md:w-auto md:h-auto'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-black opacity-20 rounded-full md:rounded-lg'></div>
              <figcaption className='absolute px-4 text-xl text-white bottom-16 left-8 md:bottom-6'>
                <p className='font-bold'>
                  Creating a space where everyone can feel at home.
                </p>
              </figcaption>
            </figure>
          </div>
        </TwoColumnSection>
      </div>

      <hr className='border-gray-200 my-0 md:hidden' />

      {/* Third Section */}
      <div className='bg-lightgray'>
        <TwoColumnSection>
          <div className='md:w-1/2'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 tracking-wider text-accent3'>
              Our Specialties
            </h2>
            <p className='text-base md:text-lg'>
              Our specialties include{' '}
              <span className='italic'>café de olla</span>,{' '}
              <span className='italic'>champurrado</span> frappes, and other
              delicious <span className='italic'>Mexican</span>
              -inspired beverages. With a relaxed and modern ambiance, adorned
              with <span className='italic'>Hispanic</span> cultural decor, our
              coffee shop is a unique space to unwind and explore new flavors.
              We are proud to offer high-quality drinks and baked goods made
              from local, high-quality ingredients.
            </p>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <figure className='relative max-w-sm'>
              <Image
                src='https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHxjb2ZmZWUlMjBzaG9wfGVufDB8fDB8fHwy'
                alt='Specialties Image'
                width={600}
                height={400}
                className='object-cover custom-shadow rounded-full md:rounded-lg w-96 h-96 md:w-auto md:h-auto'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-black opacity-20 rounded-full md:rounded-lg'></div>
              <figcaption className='absolute px-4 text-xl text-white bottom-16 left-8 md:bottom-6'>
                <p className='font-bold'>
                  Savor our café de olla, champurrado frappes, and more.
                </p>
              </figcaption>
            </figure>
          </div>
        </TwoColumnSection>
      </div>

      <hr className='border-gray-200 my-0 md:hidden' />

      {/* Fourth Section */}
      <div className='bg-background'>
        <TwoColumnSection reverseOnMobile>
          <div className='md:w-1/2'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 tracking-wider text-accent4'>
              Meet Our Team
            </h2>
            <p className='text-base md:text-lg'>
              Our team is made up of passionate baristas, dedicated managers,
              and creative individuals who love to bring a smile to your face
              with every cup of coffee. Come meet the wonderful people who make
              it all happen and share our passion for exceptional coffee and
              community.
            </p>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <figure className='relative max-w-sm'>
              <Image
                src='https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDI%3D'
                alt='Meet Our Team Image'
                width={600}
                height={400}
                className='object-cover custom-shadow rounded-full md:rounded-lg w-96 h-96 md:w-auto md:h-auto'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-black opacity-20 rounded-full md:rounded-lg'></div>
              <figcaption className='absolute px-4 text-xl text-white bottom-16 left-8 md:bottom-6'>
                <p className='font-bold'>
                  The wonderful team behind every perfect cup.
                </p>
              </figcaption>
            </figure>
          </div>
        </TwoColumnSection>
      </div>
    </main>
  );
};

export default About;
