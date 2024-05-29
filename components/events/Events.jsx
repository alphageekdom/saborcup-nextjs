'use client';

import { useState, useEffect } from 'react';
import EventCard from '@/components/events/EventCard';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ErrorMessage from '@/components/common/ErrorMessage';
import Spinner from '@/components/common/Spinner';
import { usePathname } from 'next/navigation';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pathname = usePathname();

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

  const breadcrumbItems = [{ title: 'Events', path: `${pathname}` }];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className='text-4xl font-bold text-center mb-12'>Upcoming Events</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20'>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
};

export default Events;
