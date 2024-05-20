'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import cafeLogo from '@/assets/images/SaborCup.png';
import { usePathname } from 'next/navigation';
import Cart from './cart/Cart';
import { useCart } from '@/context/CartContext';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [closeCart, setCloseCart] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setCloseCart(true);
    }
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
    setCloseCart(true);
  }, [pathname]);

  useEffect(() => {
    if (closeCart) {
      setCloseCart(false);
    }
  }, [closeCart]);

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

  const NavLink = ({ href, children, onClick }) => (
    <Link href={href} className={getLinkClass(href)} onClick={onClick}>
      {children}
    </Link>
  );

  const DropdownLink = ({ href, children, onClick }) => (
    <Link href={href} className={getDropdownLinkClass(href)} onClick={onClick}>
      {children}
    </Link>
  );

  return (
    <nav className='bg-black border-b border-primary sticky top-0 z-20 h-24 fixed-navbar sticky-navbar'>
      <div className='custom-container px-4'>
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
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/about' onClick={closeMenu}>
              About
            </NavLink>
            <div className='relative'>
              <div className='flex items-center'>
                <NavLink href='/menu' onClick={closeMenu}>
                  Menu
                </NavLink>
                <button
                  onClick={toggleDropdown}
                  className='text-xl font-medium text-white flex items-center hover:text-primary transition duration-300 ease-in-out'
                  aria-expanded={isDropdownOpen}
                  aria-controls='dropdown-menu'
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
                <div className='absolute bg-black opacity-80 border border-primary text-white flex flex-col py-2 w-screen'>
                  <DropdownLink href='/menu/hot-coffee'>
                    Hot Coffee
                  </DropdownLink>
                  <DropdownLink href='/menu/cold-coffee'>
                    Cold Coffee
                  </DropdownLink>
                  <DropdownLink href='/menu/hot-tea'>Hot Tea</DropdownLink>
                  <DropdownLink href='/menu/iced-tea'>Iced Tea</DropdownLink>
                  <DropdownLink href='/menu/lemonade'>Lemonade</DropdownLink>
                  <DropdownLink href='/menu/bakery'>Bakery</DropdownLink>
                </div>
              )}
            </div>
            <NavLink href='/events' onClick={closeMenu}>
              Events
            </NavLink>
            <NavLink href='/contact' onClick={closeMenu}>
              Contact
            </NavLink>
            <div className='relative'>
              <Cart
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                closeCart={closeCart}
              />
              {cart.length > 0 && <span className='badge'>1</span>}
            </div>
          </div>
          <div className='md:hidden flex items-center space-x-4 relative'>
            <div>
              <Cart
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                closeCart={closeCart}
              />
              {cart.length > 0 && <div className='badge'>1</div>}
            </div>
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
      </div>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        closeMenu={closeMenu}
      />
    </nav>
  );
};

export default Navbar;
