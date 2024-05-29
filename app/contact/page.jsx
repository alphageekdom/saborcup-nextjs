import Contact from '@/components/Contact';
import HeaderImage from '@/components/common/HeaderImage';

const ContactPage = () => {
  return (
    <main className='bg-gray-100'>
      <HeaderImage imageUrl='https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        <h1 className='text-4xl md:text-5xl font-bold'>Contact Us</h1>
        <p className='text-lg md:text-xl'>
          Whether it{`'`}s feedback or questions, we{`'`}ve got you covered.
        </p>
      </HeaderImage>
      <Contact />
    </main>
  );
};

export default ContactPage;
