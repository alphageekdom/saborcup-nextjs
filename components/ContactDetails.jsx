'use client';

import React from 'react';
import TwoColumnSection from './TwoColumnSection';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import ContactForm from './ContactForm';

const ContactDetails = () => {
  return (
    <TwoColumnSection className='w-full h-full'>
      <div className='container flex flex-col md:flex-row items-stretch justify-between custom-shadow'>
        <div className='md:w-1/2 bg-white text-black flex flex-col items-start justify-center mb-8 md:mb-0'>
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
                className='hover:text-custom-blue'
              >
                123 Street Name, City
              </a>
            </p>
            <p className='mb-4'>
              <strong>Phone:</strong>{' '}
              <a
                href='tel:+2325555555'
                aria-label='SaborCup Telephone Number'
                className='hover:text-custom-blue'
              >
                (232) 555 - 5555
              </a>
            </p>
            <p className='mb-4'>
              <strong>Email:</strong>{' '}
              <a
                href='mailto:info@saborcafe.com'
                aria-label='SaborCup Email Address'
                className='hover:text-custom-blue'
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
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='Facebook'
              >
                <FaFacebook size={22} />
              </a>
              <a
                href='https://www.x.com/'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='X/Twitter'
              >
                <FaTwitter size={22} />
              </a>
              <a
                href='https://www.instagram.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='Instagram'
              >
                <FaInstagram size={22} />
              </a>
              <a
                href='https://www.pinterest.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='Pinterest'
              >
                <FaPinterestP size={22} />
              </a>
              <a
                href='https://www.tiktok.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='TikTok'
              >
                <FaTiktok size={22} />
              </a>
              <a
                href='https://www.youtube.com'
                className='hover:text-custom-blue transition duration-300 ease-in-out'
                aria-label='YouTube'
              >
                <FaYoutube size={22} />
              </a>
              {/* Add more social media links as needed */}
            </div>
          </div>
        </div>
        <div className='md:w-1/2 bg-black text-white flex flex-col justify-center'>
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