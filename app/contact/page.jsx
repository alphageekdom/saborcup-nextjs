import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactDetails from '@/components/ContactDetails';
import HeaderImage from '@/components/HeaderImage';
import React from 'react';

const ContactPage = () => {
  const crumbs = [{ title: 'Contact', path: '/contact' }];

  return (
    <section className='bg-white'>
      <HeaderImage
        imageUrl='https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        overlayColor='black'
      >
        <h1 className='text-4xl md:text-5xl font-bold'>Contact Us</h1>
        <p className='text-lg md:text-xl'>
          Whether it{`'`}s feedback or questions, we{`'`}ve got you covered.
        </p>
      </HeaderImage>
      <Breadcrumbs crumbs={crumbs} />
      <ContactDetails />
    </section>
  );
};

export default ContactPage;
