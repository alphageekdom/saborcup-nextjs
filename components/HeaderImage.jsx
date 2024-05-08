import React from 'react';
import Image from 'next/image';

const HeaderImage = ({ imageUrl, overlayColor, children }) => {
  return (
    <div className='relative h-[300px] md:h-[500px] w-full'>
      <Image
        src={imageUrl}
        width={1000}
        height={1000}
        alt='Header'
        className='w-full h-full object-cover'
        priority
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-${overlayColor} opacity-50`}
      ></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10'>
        {children}
      </div>
    </div>
  );
};

export default HeaderImage;
