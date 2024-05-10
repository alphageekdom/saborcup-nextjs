import Image from 'next/image';
import React from 'react';
import ErrorCup from '@/assets/images/ErrorCupWhite.png';

const ErrorMessage = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-custom-blue'>
      <h1 className='text-7xl font-bold mb-4 text-white'>Oops!</h1>
      <p className='text-xlg text-white'>{message}</p>
      <Image
        src={ErrorCup}
        alt='Error Coffee Cup'
        width={200}
        height={200}
        loading='lazy'
      />
    </div>
  );
};

export default ErrorMessage;
