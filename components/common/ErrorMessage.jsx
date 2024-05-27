import React from 'react';

import Image from 'next/image';

import PropTypes from 'prop-types';

import ErrorCup from '@/public/images/ErrorCupWhite.png';

const ErrorMessage = ({ error }) => {
  console.log(error);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-primary p-4 text-white'>
      <h1 className='text-white text-5xl md:text-7xl font-bold mb-4'>Oops!</h1>
      <p className='text-white text-lg md:text-xl mb-6 text-center'>{error}</p>
      <Image
        src={ErrorCup}
        alt='Error Coffee Cup'
        width={200}
        height={200}
        priority
        className='animate-bounce'
      />
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
