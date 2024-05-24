import React from 'react';

import Link from 'next/link';

import { FaChevronDown } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

const MobileMenu = ({
  isMobileMenuOpen,
  isDropdownOpen,
  toggleDropdown,
  closeMenu,
}) => {
  const pathname = usePathname();

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
    isMobileMenuOpen && (
      <div className='md:hidden flex flex-col space-y-4 py-3 bg-black w-full px-4'>
        <NavLink href='/' onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink href='/about' onClick={closeMenu}>
          About
        </NavLink>
        <div className='flex items-center'>
          <NavLink href='/menu' onClick={closeMenu}>
            Menu
          </NavLink>
          <button
            onClick={toggleDropdown}
            className={`text-xl font-medium flex items-center transition duration-300 ease-in-out ${
              pathname.startsWith('/menu')
                ? 'text-primary'
                : 'text-white hover:text-primary'
            }`}
            aria-expanded={isDropdownOpen}
            aria-controls='mobile-dropdown-menu'
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
          <div id='mobile-dropdown-menu' className='flex flex-col pb-4'>
            <DropdownLink href='/menu/hot-coffee' onClick={closeMenu}>
              Hot Coffee
            </DropdownLink>
            <DropdownLink href='/menu/cold-coffee' onClick={closeMenu}>
              Cold Coffee
            </DropdownLink>
            <DropdownLink href='/menu/hot-tea' onClick={closeMenu}>
              Hot Tea
            </DropdownLink>
            <DropdownLink href='/menu/iced-tea' onClick={closeMenu}>
              Iced Tea
            </DropdownLink>
            <DropdownLink href='/menu/lemonade' onClick={closeMenu}>
              Lemonade
            </DropdownLink>
            <DropdownLink href='/menu/bakery' onClick={closeMenu}>
              Bakery
            </DropdownLink>
          </div>
        )}
        <NavLink href='/events' onClick={closeMenu}>
          Events
        </NavLink>
        <NavLink href='/contact' onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
    )
  );
};

export default MobileMenu;
