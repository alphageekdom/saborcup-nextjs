import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
          {/* Quick Links */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-lg font-bold mb-4'>Quick Links</h1>
            <ul className='space-y-2'>
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
            <h1 className='text-lg font-bold mb-4'>Follow Us</h1>
            <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
              <a
                href='https://www.facebook.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='Facebook'
              >
                <FaFacebook size={24} />
              </a>
              <a
                href='https://www.x.com/'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='X/Twitter'
              >
                <FaTwitter size={24} />
              </a>
              <a
                href='https://www.instagram.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='Instagram'
              >
                <FaInstagram size={24} />
              </a>
              <a
                href='https://www.pinterest.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='Pinterest'
              >
                <FaPinterestP size={24} />
              </a>
              <a
                href='https://www.tiktok.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='TikTok'
              >
                <FaTiktok size={24} />
              </a>
              <a
                href='https://www.youtube.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='YouTube'
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          <hr className='border-blue-500 my-4 md:hidden' />

          {/* Company Information */}
          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-lg font-bold mb-4'>SaborCup</h1>
            <p>123 Street Name, City</p>
            <p>Email: info@saborcafee.com</p>
            <p>Phone: (232) 555 - 55555</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
