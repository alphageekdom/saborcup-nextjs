'use client';

import Link from 'next/link';

const handleBack = (e) => {
  e.preventDefault();
  window.history.back();
};

const BackButton = () => (
  <Link
    href={'#'}
    onClick={handleBack}
    className='text-[#0A93FE] hover:bg-[#0A93FE] hover:text-white font-bold py-2 px-20 rounded-md text-xl shadow-lg border border-[#0A93FE]'
  >
    Back
  </Link>
);

export default BackButton;
