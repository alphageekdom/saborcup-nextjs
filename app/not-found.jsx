import BackButton from '@/components/common/BackButton';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='min-h-screen bg-black flex flex-col items-center justify-center'>
      <div className='text-white text-4xl sm:text-6xl text-center mb-4'>
        404 <span className='text-[#0A93FE]'>|</span> Page Not Found
      </div>
      <BackButton />
    </div>
  );
};

export default NotFoundPage;
