'use client';

import TwoColumnSection from './common/TwoColumnSection';
import StoreMap from './StoreMap';

import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const StoreInfo = () => {
  return (
    <TwoColumnSection className='text-center md:text-left'>
      <div className='w-full md:w-1/2 custom-shadow order-2 md:order-1'>
        <StoreMap />
      </div>
      <div className='flex flex-col w-1/2 text-center order-1'>
        {/* Wrapping div */}
        <h2 className='text-3xl md:text-4xl font-semibold mb-4 text-center text-primary'>
          Store Information
        </h2>
        <div>
          <p className='text-lg md:text-xl text-black mb-4'>
            <strong>Address:</strong>{' '}
            <a
              href='https://www.google.com/maps/place/123ValenciaAvenueOrangeCA92866'
              aria-label='SaborCup Address'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary'
            >
              123 Valencia Avenue, Orange, CA 92866
            </a>
          </p>
          <p className='text-lg md:text-xl text-black mb-4'>
            <strong>Phone:</strong>{' '}
            <a
              href='tel:+2325555555'
              aria-label='SaborCup Telephone Number'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary'
            >
              (232) 555 - 5555
            </a>
          </p>
          <p className='text-lg md:text-xl text-black mb-4'>
            <strong>Email:</strong>{' '}
            <a
              href='mailto:info@saborcafe.com'
              aria-label='SaborCup Email Address'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary'
            >
              info@saborcafe.com
            </a>
          </p>
          <p className='text-lg md:text-xl text-black mb-8'>
            <strong>Hours:</strong> M-F: 6:00 AM - 8:00 PM <br />
            <span className='ml-12'>Weekends: 6:00 AM - 10:00 PM</span>
          </p>
          <div className='flex flex-row justify-center space-x-4 mb-4'>
            <a
              href='https://www.facebook.com'
              className='hover:text-primary transition duration-300 ease-in-out'
              aria-label='Facebook'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook size={22} />
            </a>
            <a
              href='https://www.x.com/'
              className='hover:text-primary transition duration-300 ease-in-out'
              aria-label='X/Twitter'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaXTwitter size={22} />
            </a>
            <a
              href='https://www.instagram.com'
              className='hover:text-primary transition duration-300 ease-in-out'
              aria-label='Instagram'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram size={22} />
            </a>
            <a
              href='https://www.pinterest.com'
              className='hover:text-primary transition duration-300 ease-in-out'
              aria-label='Pinterest'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaPinterestP size={22} />
            </a>
            <a
              href='https://www.tiktok.com'
              className='hover:text-primary transition duration-300 ease-in-out'
              aria-label='TikTok'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTiktok size={22} />
            </a>
            <a
              href='https://www.youtube.com'
              className='hover:text-primary transition duration-300 ease-in-out'
              aria-label='YouTube'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaYoutube size={22} />
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </TwoColumnSection>
  );
};

export default StoreInfo;
