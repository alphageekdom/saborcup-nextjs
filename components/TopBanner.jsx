import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import { GiCoffeePot } from 'react-icons/gi';

const TopBanner = () => {
  return (
    <div className='bg-white text-black py-2 px-4'>
      <div className='container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center'>
        <div className='text-lg font-bold flex items-center mb-2 sm:mb-0'>
          Welcome to SaborCup
          <GiCoffeePot size={20} className='ml-2' />
        </div>

        <div className='flex flex-wrap justify-center sm:justify-end space-x-4'>
          <a
            href='https://www.facebook.com'
            className='hover:text-custom-blue transition duration-300 ease-in-out'
            aria-label='Facebook'
          >
            <FaFacebook size={20} />
          </a>
          <a
            href='https://www.x.com/'
            className='hover:text-custom-blue transition duration-300 ease-in-out'
            aria-label='X/Twitter'
          >
            <FaTwitter size={20} />
          </a>
          <a
            href='https://www.instagram.com'
            className='hover:text-custom-blue transition duration-300 ease-in-out'
            aria-label='Instagram'
          >
            <FaInstagram size={20} />
          </a>
          <a
            href='https://www.pinterest.com'
            className='hover:text-custom-blue transition duration-300 ease-in-out'
            aria-label='Pinterest'
          >
            <FaPinterestP size={20} />
          </a>
          <a
            href='https://www.tiktok.com'
            className='hover:text-custom-blue transition duration-300 ease-in-out'
            aria-label='TikTok'
          >
            <FaTiktok size={20} />
          </a>
          <a
            href='https://www.youtube.com'
            className='hover:text-custom-blue transition duration-300 ease-in-out'
            aria-label='YouTube'
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
