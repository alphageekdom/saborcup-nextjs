import React from 'react';

import Link from 'next/link';

import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
  FaHeart,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
          {/* Quick Links */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-lg font-bold mb-6 text-custom-blue'>
              Quick Links
            </h1>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/'
                  className='hover:text-custom-blue transition duration-300 ease-in-out'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/menu'
                  className='hover:text-custom-blue transition duration-300 ease-in-out'
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-custom-blue transition duration-300 ease-in-out'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-custom-blue transition duration-300 ease-in-out'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className='border-blue-500 my-4 md:hidden' />

          {/* Social Media Icons */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-lg font-bold mb-6 text-custom-blue'>
              Follow Us
            </h1>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4 justify-center md:justify-start'>
              <a
                href='https://www.facebook.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='Facebook'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook size={32} />
              </a>
              <a
                href='https://www.x.com/'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='X/Twitter'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaXTwitter size={32} />
              </a>
              <a
                href='https://www.instagram.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='Instagram'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram size={32} />
              </a>
              <a
                href='https://www.pinterest.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='Pinterest'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaPinterestP size={32} />
              </a>
              <a
                href='https://www.tiktok.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='TikTok'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTiktok size={32} />
              </a>
              <a
                href='https://www.youtube.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='YouTube'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaYoutube size={32} />
              </a>
            </div>
          </div>
          <hr className='border-blue-500 my-4 md:hidden' />

          {/* Company Information */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-lg font-bold mb-4 text-custom-blue'>
              &copy; {new Date().getFullYear()} SaborCup, LLC.
              <br />
              All rights reserved.
            </h1>
            <p className='mb-1'>
              <a
                href='https://www.google.com/maps/place/123StreetNameCity'
                aria-label='SaborCup Address'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-custom-blue'
              >
                123 Street Name, City
              </a>
            </p>
            <p className='mb-1'>
              Email:{' '}
              <a
                href='mailto:info@saborcafe.com'
                aria-label='SaborCup Email Address'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-custom-blue'
              >
                info@saborcafe.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a
                href='tel:+2325555555'
                aria-label='SaborCup Telephone Number'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-custom-blue'
              >
                (232) 555 - 5555
              </a>
            </p>
          </div>
        </div>
        <hr className='border-blue-500 my-6' />
        <div className='text-center'>
          <p className='text-sm text-gray-400 flex items-center justify-center gap-1'>
            Developed with <FaHeart className='text-custom-blue' /> by
            AlphaGeekdom
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
