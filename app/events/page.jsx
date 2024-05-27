'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import EventCard from '@/components/events/EventCard';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ErrorMessage from '@/components/common/ErrorMessage';
import HeaderImage from '@/components/common/HeaderImage';
import Spinner from '@/components/common/Spinner';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const breadcrumbItems = [{ title: 'Menu', path: '/events' }];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage error={error} />;

  return (
    <section className='bg-white'>
      <HeaderImage imageUrl='https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D'>
        <h1 className='text-4xl md:text-5xl font-bold'>Our Events</h1>
        <p className='text-lg md:text-xl'>
          Come and discover the beauty of culture and feel embraced by our
          SaborCup community.
        </p>
      </HeaderImage>
      <Breadcrumbs items={breadcrumbItems} />
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold text-center text-black mb-10'>
          Upcoming Events
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20'>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
