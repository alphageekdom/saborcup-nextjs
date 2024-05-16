'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

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
    <div className='carousel w-full max-h-[500px] block z-10'>
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
          className='object-cover max-h-[300px]'
          priority
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-white mb-6'>
            Check Out Our Menu
          </h2>
          <Link
            href='/menu'
            className='bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg z-10'
          >
            Explore
          </Link>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button onClick={previousSlide}>
            <MdKeyboardArrowLeft
              size={80}
              className='hover:text-white text-gray-300'
              aria-label='Previous Image'
            />
          </button>
          <button onClick={nextSlide}>
            <MdKeyboardArrowRight
              size={80}
              className='hover:text-white text-gray-300'
              aria-label='Next Image'
            />
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
          className='object-cover max-h-[300px]'
          priority
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-white mb-6'>
            Try Our Signature Drinks
          </h2>
          <Link
            href='/menu/signature-drinks'
            className='bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg z-10'
          >
            Explore
          </Link>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button onClick={previousSlide} aria-label='Previous Image'>
            <MdKeyboardArrowLeft
              size={80}
              className='hover:text-white text-gray-300'
            />
          </button>
          <button onClick={nextSlide} aria-label='Next Image'>
            <MdKeyboardArrowRight
              size={80}
              className='hover:text-white text-gray-300'
            />
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
          className='object-cover max-h-[300px]'
          priority
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-white mb-6'>
            Join Our Upcoming Events
          </h2>
          <Link
            href='/events'
            className='bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg z-10'
          >
            View
          </Link>
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button onClick={previousSlide} aria-label='Previous Image'>
            <MdKeyboardArrowLeft
              size={80}
              className='hover:text-white text-gray-300'
            />
          </button>
          <button onClick={nextSlide} aria-label='Next Image'>
            <MdKeyboardArrowRight
              size={80}
              className='hover:text-white text-gray-300'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
