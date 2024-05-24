'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Breadcrumbs = ({ items }) => {
  const pathname = usePathname();

  return (
    <nav className='container mx-auto pl-5 md:pl-0 flex items-center py-8'>
      <ul className='flex items-center space-x-2'>
        <li>
          <Link
            href='/'
            passHref
            className={`flex items-center text-gray-600 ${
              pathname === '/' ? 'text-black' : ''
            }`}
            aria-label='Home'
          >
            <FaHome />
          </Link>
        </li>
        {items.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <li key={index} className='flex items-center space-x-2'>
              <MdOutlineKeyboardArrowRight
                className='text-gray-600'
                size={24}
              />
              {isActive ? (
                <span className='text-black font-bold'>{item.title}</span>
              ) : (
                <Link href={item.path} passHref className='text-gray-600'>
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
