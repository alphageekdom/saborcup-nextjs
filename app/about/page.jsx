import About from '@/components/About';
import HeaderImage from '@/components/common/HeaderImage';

const AboutPage = () => {
  return (
    <section className='bg-white'>
      <HeaderImage imageUrl='https://images.unsplash.com/photo-1513267048331-5611cad62e41?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        <h1 className='text-4xl md:text-5xl font-bold'>Welcome to SaborCup</h1>
        <p className='text-lg md:text-xl'>
          Experience the essence of Latin flavors in every cup
        </p>
      </HeaderImage>
      <About />
    </section>
  );
};

export default AboutPage;
