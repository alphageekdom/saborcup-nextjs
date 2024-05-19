'use client';

import React from 'react';
import TwoColumnSection from './common/TwoColumnSection';
import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ContactForm from './ContactForm';

const ContactDetails = () => {
  return (
    <TwoColumnSection className='w-full h-full'>
      <div className='container flex flex-col md:flex-row items-stretch justify-between custom-shadow'>
        <div className='md:w-1/2 bg-white text-black flex flex-col items-start justify-center md:mb-0 py-10'>
          <div className='w-full max-w-lg mx-auto p-6'>
            {' '}
            {/* Wrapping div */}
            <h2 className='text-3xl font-semibold mb-4 text-center'>
              Contact Information
            </h2>
            <p className='mb-4'>
              <strong>Address:</strong>{' '}
              <a
                href='https://www.google.com/maps/place/123StreetNameCity'
                aria-label='SaborCup Address'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary'
              >
                123 Street Name, City
              </a>
            </p>
            <p className='mb-4'>
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
            <p className='mb-4'>
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
            <p className='mb-4'>
              <strong>Hours:</strong> M-F: 6:00 AM - 8:00 PM <br />
              <span className='ml-12'>Weekends: 6:00 AM - 10:00 PM</span>
            </p>
            <div className='flex space-x-4 mb-4'>
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
        <div className='md:w-1/2 bg-black text-white flex flex-col justify-center py-10'>
          <div className='w-full max-w-lg mx-auto p-6'>
            <h2 className='text-3xl font-semibold mb-4 text-center'>
              Contact Form
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </TwoColumnSection>
  );
};

export default ContactDetails;
