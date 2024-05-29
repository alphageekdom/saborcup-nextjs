'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

import CafeLogo from '@/public/images/SaborCup.png';

import Cart from '../cart/Cart';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import DropdownLink from './DropdownLink';

import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [closeCart, setCloseCart] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();

  const [openSubMenu, setOpenSubMenu] = useState(null);

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
    setOpenSubMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (closeCart) {
      setCloseCart(false);
    }
  }, [closeCart]);

  return (
    <nav className='bg-black border-b border-primary sticky top-0 z-20 h-24 fixed-navbar sticky-navbar'>
      <div className='custom-container px-4'>
        <div className='flex justify-between items-center py-4'>
          <div className='md:hidden flex items-center space-x-4 relative'>
            {/* Mobile Menu Button */}
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
          <div className='flex items-center'>
            <Link href='/'>
              <Image
                className='w-30 h-15'
                src={CafeLogo}
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
                    className={`ml-2 text-xl font-medium flex items-center transition duration-300 ease-in-out ${
                      isDropdownOpen
                        ? 'text-primary'
                        : 'text-white hover:text-primary'
                    }`}
                  />
                </button>
              </div>
              {isDropdownOpen && (
                <div className='absolute flex flex-col top-[3.80rem] w-64 bg-black  text-white border-l border-r border-b border-primary border-t-0'>
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
            <div className='relative z-10'>
              <Cart
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                closeCart={closeCart}
              />
              {cart.length > 0 && <span className='badge'>1</span>}
            </div>
          </div>
          <div className='md:hidden flex items-center relative'>
            <Cart
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              closeCart={closeCart}
            />
            {cart.length > 0 && <div className='badge'>1</div>}
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
