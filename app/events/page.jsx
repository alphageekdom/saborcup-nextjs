'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import EventCard from '@/components/EventCard';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const crumbs = [{ title: 'Events', path: '/events' }];

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className='bg-white py-12'>
      <Breadcrumbs crumbs={crumbs} />
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold text-center text-black mb-10'>
          Upcoming Events
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
