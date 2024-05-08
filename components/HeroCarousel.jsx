'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = ['slide1', 'slide2', 'slide3'];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='carousel w-full max-h-[500px] block'>
      {/* Slide 1: Checkout Menu */}
      <div
        id='slide1'
        className={`carousel-item relative w-full ${
          currentSlide === 0 ? 'block' : 'hidden'
        }`}
      >
        <Image
          src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZmZlZSUyMHNob3AlMjBkcmlua3N8ZW58MHwwfDB8fHww'
          alt='Checkout Menu'
          width={2000}
          height={100}
          sizes='100vw'
          className='object-cover max-h-[500px]'
          priority
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-white mb-6'>
            Check Out Our Menu
          </h2>
          <Link href='/menu'>
            <button className='bg-[#0A93FE] hover:bg-[#0877cc]  text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg'>
              Explore
            </button>
          </Link>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button
            onClick={previousSlide}
            className='btn btn-circle btn-outline'
          >
            ❮
          </button>
          <button onClick={nextSlide} className='btn btn-circle btn-outline'>
            ❯
          </button>
        </div>
      </div>

      {/* Slide 2: Signature Drinks */}
      <div
        id='slide2'
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? 'block' : 'hidden'
        }`}
      >
        <Image
          src='https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwZHJpbmtzfGVufDB8fDB8fHww'
          alt='Signature Drinks'
          width={2000}
          height={100}
          sizes='100vw'
          className='object-cover max-h-[500px]'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-white mb-6'>
            Try Our Signature Drinks
          </h2>
          <Link href='/menu/signature-drinks'>
            <button className='bg-[#0A93FE] hover:bg-[#0877cc]  text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg'>
              Explore
            </button>
          </Link>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button
            onClick={previousSlide}
            className='btn btn-circle btn-outline'
          >
            ❮
          </button>
          <button onClick={nextSlide} className='btn btn-circle btn-outline'>
            ❯
          </button>
        </div>
      </div>

      {/* Slide 3: Upcoming Events */}
      <div
        id='slide3'
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? 'block' : 'hidden'
        }`}
      >
        <Image
          src='https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJha2VkJTIwZ29vZHMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D'
          alt='Upcoming Events'
          width={2000}
          height={100}
          sizes='100vw'
          className='object-cover max-h-[500px]'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-white mb-6'>
            Join Our Upcoming Events
          </h2>
          <Link href='/events'>
            <button className='bg-[#0A93FE] hover:bg-[#0877cc]  text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg'>
              View
            </button>
          </Link>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button
            onClick={previousSlide}
            className='btn btn-circle btn-outline'
          >
            ❮
          </button>
          <button onClick={nextSlide} className='btn btn-circle btn-outline'>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
