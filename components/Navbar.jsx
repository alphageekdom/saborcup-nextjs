'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import cafeLogo from '@/assets/images/SaborCup.png';
import TopBanner from './TopBanner';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <TopBanner />
      <nav className='bg-black border-b border-[#0A93FE]'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            {/* Logo */}
            <div className='flex items-center'>
              <Link href='/'>
                <Image
                  className='w-30 h-15'
                  src={cafeLogo}
                  alt='Coffee Shop Logo'
                  width={100}
                  height='auto'
                  priority
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className='hidden md:flex items-center space-x-4'>
              <Link
                href='/'
                className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
              >
                Home
              </Link>
              <Link
                href='/menu'
                className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
              >
                Menu
              </Link>
              <Link
                href='/about'
                className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
              >
                About
              </Link>
              <Link
                href='/contact'
                className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
              >
                Contact
              </Link>
              {/* Shopping Cart */}
              <div className='flex items-center'>
                <FaShoppingCart
                  className='text-white font-medium hover:custom-blue-color cursor-pointer transition duration-300 ease-in-out'
                  size={24}
                />
                {/* Add cart functionality here */}
              </div>
            </div>
            {/* Mobile Menu Toggle */}
            <div className='md:hidden'>
              {isMobileMenuOpen ? (
                <FaTimes
                  className='text-white hover:custom-blue-color cursor-pointer transition duration-300 ease-in-out'
                  size={24}
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  className='text-white hover:custom-blue-color cursor-pointer transition duration-300 ease-in-out'
                  size={24}
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className='md:hidden'>
              <div className='flex flex-col space-y-4'>
                <Link
                  href='/'
                  className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
                >
                  Home
                </Link>
                <Link
                  href='/menu'
                  className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
                >
                  Menu
                </Link>
                <Link
                  href='/about'
                  className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
                >
                  About
                </Link>
                <Link
                  href='/contact'
                  className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
                >
                  Contact
                </Link>
                {/* Shopping Cart */}
                <div className='flex items-center pb-4'>
                  <FaShoppingCart
                    className='text-white hover:custom-blue-color cursor-pointer transition duration-300 ease-in-out'
                    size={24}
                  />
                  {/* Add cart functionality here */}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
