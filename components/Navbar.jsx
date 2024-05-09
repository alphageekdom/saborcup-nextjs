'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaChevronDown } from 'react-icons/fa';
import cafeLogo from '@/assets/images/SaborCup.png';
import TopBanner from './TopBanner';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  const getLinkClass = (href) => {
    return pathname === href
      ? 'text-[#0A93FE] text-xl font-medium transition duration-300 ease-in-out'
      : 'text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out';
  };

  const getDropdownLinkClass = (href) => {
    return pathname === href
      ? 'px-4 py-2 bg-[#0A93FE] text-white'
      : 'px-4 py-2 hover:bg-[#0A93FE] hover:text-white';
  };

  return (
    <>
      <TopBanner />
      <nav className='bg-black border-b border-[#0A93FE]'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
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
            <div className='hidden md:flex items-center space-x-4'>
              <Link href='/' className={getLinkClass('/')}>
                Home
              </Link>
              <Link
                href='/about'
                className={getLinkClass('/about')}
                onClick={closeMenu}
              >
                About
              </Link>
              <div className='relative'>
                <button
                  onClick={toggleDropdown}
                  className='text-xl font-medium text-white flex items-center hover:custom-blue-color transition duration-300 ease-in-out'
                >
                  Menu{' '}
                  <FaChevronDown
                    className={`ml-1 text-xl font-medium flex items-center transition duration-300 ease-in-out ${
                      isDropdownOpen
                        ? 'text-[#0A93FE]'
                        : 'text-white hover:custom-blue-color'
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className='absolute bg-black opacity-80 border border-[#0A93FE] text-white flex flex-col py-2 w-60 z-40'>
                    <Link
                      href='/menu/hot-coffees'
                      className={getDropdownLinkClass('/menu/hot-coffees')}
                    >
                      Hot Coffees
                    </Link>
                    <Link
                      href='/menu/teas'
                      className={getDropdownLinkClass('/menu/teas')}
                    >
                      Teas
                    </Link>
                    <Link
                      href='/menu/cold-coffees'
                      className={getDropdownLinkClass('/menu/cold-coffees')}
                    >
                      Cold Coffees
                    </Link>
                    <Link
                      href='/menu/iced-teas'
                      className={getDropdownLinkClass('/menu/iced-teas')}
                    >
                      Iced Teas
                    </Link>
                    <Link
                      href='/menu/lemonades'
                      className={getDropdownLinkClass('/menu/lemonades')}
                    >
                      Lemonades
                    </Link>
                    <Link
                      href='/menu/bakery'
                      className={getDropdownLinkClass('/menu/bakery')}
                    >
                      Bakery Items
                    </Link>
                  </div>
                )}
              </div>
              <Link href='/events' className={getLinkClass('/events')}>
                Events
              </Link>
              <Link href='/contact' className={getLinkClass('/contact')}>
                Contact
              </Link>
              <div className='flex items-center'>
                <FaShoppingCart
                  className='text-white hover:custom-blue-color cursor-pointer transition duration-300 ease-in-out'
                  size={24}
                />
              </div>
            </div>
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
          {isMobileMenuOpen && (
            <div className='md:hidden flex flex-col space-y-4'>
              <Link
                href='/'
                className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href='/about'
                className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
                onClick={closeMenu}
              >
                About
              </Link>
              <button
                onClick={toggleDropdown}
                className='text-xl font-medium text-white flex items-center hover:custom-blue-color transition duration-300 ease-in-out'
              >
                Menu{' '}
                <FaChevronDown
                  className={`ml-1 text-xl font-medium flex items-center transition duration-300 ease-in-out ${
                    isDropdownOpen
                      ? 'text-[#0A93FE]'
                      : 'text-white hover:custom-blue-color'
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className='flex flex-col pb-4'>
                  <Link
                    href='/menu/hot-coffees'
                    className='px-4 py-2 hover:bg-[#0A93FE] hover:text-white'
                    onClick={closeMenu}
                  >
                    Hot Coffees
                  </Link>
                  <Link
                    href='/menu/teas'
                    className='px-4 py-2 hover:bg-[#0A93FE] hover:text-white'
                    onClick={closeMenu}
                  >
                    Teas
                  </Link>
                  <Link
                    href='/menu/cold-coffees'
                    className='px-4 py-2 hover:bg-[#0A93FE] hover:text-white'
                    onClick={closeMenu}
                  >
                    Cold Coffees
                  </Link>
                  <Link
                    href='/menu/iced-teas'
                    className='px-4 py-2 hover:bg-[#0A93FE] hover:text-white'
                    onClick={closeMenu}
                  >
                    Iced Teas
                  </Link>
                  <Link
                    href='/menu/lemonades'
                    className='px-4 py-2 hover:bg-[#0A93FE] hover:text-white'
                    onClick={closeMenu}
                  >
                    Lemonades
                  </Link>
                  <Link
                    href='/menu/bakery'
                    className='px-4 py-2 hover:bg-[#0A93FE] hover:text-white'
                    onClick={closeMenu}
                  >
                    Bakery Items
                  </Link>
                </div>
              )}
              <Link
                href='/events'
                className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
                onClick={closeMenu}
              >
                Events
              </Link>
              <Link
                href='/contact'
                className='text-xl font-medium text-white hover:custom-blue-color transition duration-300 ease-in-out'
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className='flex items-center pb-4'>
                <FaShoppingCart
                  className='text-white hover:custom-blue-color cursor-pointer transition duration-300 ease-in-out'
                  size={24}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
