'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroCarousel = ({ slides, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const navigateSlide = (index) => {
    setCurrentSlide(index);
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
            className='object-cover max-h-[500px]'
            priority
          />
          <div className='absolute inset-0 flex flex-col justify-center items-center header-overlay'>
            <h2 className='text-4xl md:text-6xl  text-white mb-6'>
              {slide.title}
            </h2>
            <Link
              href={slide.link}
              className='bg-primary hover:bg-blue-500 text-white font-bold py-1 px-4 md:py-3 md:px-10 rounded-md text-xl shadow-lg z-10'
            >
              {slide.buttonText}
            </Link>
          </div>
          <div className='absolute bottom-5 w-full flex justify-center items-center'>
            {slides.map((_, idx) => (
              <span
                key={idx}
                onClick={() => navigateSlide(idx)}
                className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
                  currentSlide === idx ? 'bg-white' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
