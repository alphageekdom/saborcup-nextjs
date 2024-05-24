'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const HeroCarousel = ({ slides, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [interval, nextSlide]);

  return (
    <div className='carousel w-full max-h-[500px] block z-10'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            currentSlide === index ? 'block' : 'hidden'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            width={2000}
            height={100}
            sizes='100vw'
            className='object-cover max-h-[300px]'
            priority
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-white mb-6'>
              {slide.title}
            </h2>
            <Link
              href={slide.link}
              className='bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg z-10'
            >
              {slide.buttonText}
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
      ))}
    </div>
  );
};

export default HeroCarousel;
