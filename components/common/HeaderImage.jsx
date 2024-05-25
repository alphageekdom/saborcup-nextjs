import Image from 'next/image';

const HeaderImage = ({ imageUrl, children }) => {
  return (
    <div className='relative w-full h-[300px]'>
      <Image
        src={imageUrl}
        width={1600}
        height={900}
        sizes='100vw'
        alt='Header image'
        className='object-cover w-full h-full'
        priority
      />
      <div className='absolute top-0 left-0 w-full h-full opacity-50 overlay'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10'>
        {children}
      </div>
    </div>
  );
};

export default HeaderImage;
