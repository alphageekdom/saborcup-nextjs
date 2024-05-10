'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Breadcrumbs = ({ crumbs }) => {
  const pathname = usePathname();

  return (
    <div className='container mx-auto pl-5 md:pl-0'>
      <nav className='flex items-center py-8'>
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
          {crumbs.map((crumb, index) => {
            const isActive = pathname === crumb.path;

            return (
              <li key={index} className='flex items-center space-x-2'>
                <MdOutlineKeyboardArrowRight
                  className='text-gray-600'
                  size={24}
                />
                {isActive ? (
                  <span className='text-black font-bold'>{crumb.title}</span>
                ) : (
                  <Link href={crumb.path} passHref className='text-gray-600'>
                    {crumb.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
