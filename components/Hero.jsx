import HeroCarousel from './HeroCarousel';

import slides from '@/data/slides';

const Hero = () => {
  return (
    <div className='relative'>
      <HeroCarousel slides={slides} />
    </div>
  );
};

export default Hero;
