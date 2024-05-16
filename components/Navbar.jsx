'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaChevronDown } from 'react-icons/fa';
import cafeLogo from '@/assets/images/SaborCup.png';
import TopBanner from './TopBanner';
import { usePathname } from 'next/navigation';
import Cart from './Cart';

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
      ? 'text-primary text-xl font-medium transition duration-300 ease-in-out'
      : 'text-xl font-medium text-white hover:text-primary transition duration-300 ease-in-out';
  };

  const getDropdownLinkClass = (href) => {
    return pathname === href
      ? 'px-4 py-2 bg-primary text-white'
      : 'px-4 py-2 text-white hover:bg-primary';
  };

  return (
    <>
      <TopBanner />
      <nav className='bg-black border-b border-primary'>
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
                <div className='flex items-center'>
                  <Link
                    href='/menu'
                    className={getLinkClass('/menu')}
                    onClick={closeMenu}
                  >
                    Menu
                  </Link>
                  <button
                    onClick={toggleDropdown}
                    className='text-xl font-medium text-white flex items-center hover:text-primary transition duration-300 ease-in-out'
                    aria-label='Dropdown Button'
                  >
                    <FaChevronDown
                      className={`ml-1 text-xl font-medium flex items-center transition duration-300 ease-in-out ${
                        isDropdownOpen
                          ? 'text-primary'
                          : 'text-white hover:text-primary'
                      }`}
                    />
                  </button>
                </div>
                {isDropdownOpen && (
                  <div className='absolute bg-black opacity-80 border border-primary text-white flex flex-col py-2 w-60 z-40'>
                    <Link
                      href='/menu/hot-coffee'
                      className={getDropdownLinkClass('/menu/hot-coffee')}
                    >
                      Hot Coffee
                    </Link>
                    <Link
                      href='/menu/cold-coffee'
                      className={getDropdownLinkClass('/menu/cold-coffee')}
                    >
                      Cold Coffee
                    </Link>
                    <Link
                      href='/menu/hot-tea'
                      className={getDropdownLinkClass('/menu/hot-tea')}
                    >
                      Hot Tea
                    </Link>
                    <Link
                      href='/menu/iced-tea'
                      className={getDropdownLinkClass('/menu/iced-tea')}
                    >
                      Iced Tea
                    </Link>
                    <Link
                      href='/menu/lemonade'
                      className={getDropdownLinkClass('/menu/lemonade')}
                    >
                      Lemonade
                    </Link>
                    <Link
                      href='/menu/bakery'
                      className={getDropdownLinkClass('/menu/bakery')}
                    >
                      Bakery
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
              <Cart />
            </div>
            <div className='md:hidden'>
              {isMobileMenuOpen ? (
                <FaTimes
                  className='text-white hover:text-primary cursor-pointer transition duration-300 ease-in-out'
                  size={24}
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  className='text-white hover:text-primary cursor-pointer transition duration-300 ease-in-out'
                  size={24}
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className='md:hidden flex flex-col space-y-4'>
              <Link href='/' className={getLinkClass('/')} onClick={closeMenu}>
                Home
              </Link>
              <Link
                href='/about'
                className={getLinkClass('/about')}
                onClick={closeMenu}
              >
                About
              </Link>
              <div className='flex items-center'>
                <Link
                  href='/menu'
                  className={getLinkClass('/menu')}
                  onClick={closeMenu}
                >
                  Menu
                </Link>
                <button
                  onClick={toggleDropdown}
                  className={`text-xl font-medium flex items-center transition duration-300 ease-in-out ${
                    pathname.startsWith('/menu')
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                  aria-label='Dropdown Button'
                >
                  <FaChevronDown
                    className={`ml-1 text-xl font-medium flex items-center transition duration-300 ease-in-out ${
                      isDropdownOpen || pathname.startsWith('/menu')
                        ? 'text-primary'
                        : 'text-white hover:text-primary'
                    }`}
                  />
                </button>
              </div>
              {isDropdownOpen && (
                <div className='flex flex-col pb-4'>
                  <Link
                    href='/menu/hot-coffee'
                    className={getDropdownLinkClass('/menu/hot-coffee')}
                    onClick={closeMenu}
                  >
                    Hot Coffee
                  </Link>
                  <Link
                    href='/menu/cold-coffee'
                    className={getDropdownLinkClass('/menu/cold-coffee')}
                    onClick={closeMenu}
                  >
                    Cold Coffee
                  </Link>
                  <Link
                    href='/menu/hot-tea'
                    className={getDropdownLinkClass('/menu/hot-tea')}
                    onClick={closeMenu}
                  >
                    Hot Tea
                  </Link>
                  <Link
                    href='/menu/iced-tea'
                    className={getDropdownLinkClass('/menu/iced-tea')}
                    onClick={closeMenu}
                  >
                    Iced Tea
                  </Link>
                  <Link
                    href='/menu/lemonade'
                    className={getDropdownLinkClass('/menu/lemonade')}
                    onClick={closeMenu}
                  >
                    Lemonade
                  </Link>
                  <Link
                    href='/menu/bakery'
                    className={getDropdownLinkClass('/menu/bakery')}
                    onClick={closeMenu}
                  >
                    Bakery
                  </Link>
                </div>
              )}
              <Link
                href='/events'
                className={getLinkClass('/events')}
                onClick={closeMenu}
              >
                Events
              </Link>
              <Link
                href='/contact'
                className={getLinkClass('/contact')}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Cart />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
