'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Spinner from '../common/Spinner';
import ErrorMessage from '../common/ErrorMessage';

const EventDetails = ({ eventId }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`/api/events/${eventId}`, {
          cache: 'no-store',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch event');
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  console.log(event);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!event) return <p>Event not found</p>;

  return (
    <div className='flex flex-col items-center gap-8 p-4 lg:px-0'>
      <div className='relative w-full max-w-4xl flex justify-center items-center'>
        <Image
          src={event.image}
          alt={`${event.title} event`}
          width={500}
          height={500}
          className='object-cover w-[300px] h-[300px] md:w-[1280px] md:h-[450px] rounded-full md:rounded-lg custom-shadow'
          priority
        />
      </div>
      <h2 className='text-3xl text-black font-semibold text-center'>
        {event.title}
      </h2>
      {event.description && (
        <div className='bg-lightgray shadow p-4 rounded-lg w-full max-w-3xl'>
          <h3 className='text-xl font-semibold text-black'>Description</h3>
          <p className='mt-2 text-gray-700'>{event.description}</p>
        </div>
      )}
      {event.importance && (
        <div className='bg-lightgray shadow p-4 rounded-lg w-full max-w-3xl'>
          <h3 className='text-xl font-semibold text-accent1'>Importance</h3>
          <p className='mt-2 text-gray-700'>{event.importance}</p>
        </div>
      )}
      <div className='bg-lightgray shadow p-4 rounded-lg w-full max-w-3xl'>
        <h3 className='text-xl font-semibold text-accent4'>Event Details</h3>
        <p className='mt-2 text-gray-700'>
          <strong>Host:</strong> {event.host}
        </p>
        <p className='mt-2 text-gray-700'>
          <strong>Cost:</strong> ${event.cost.toFixed(2)}
        </p>
        <p className='mt-2 text-gray-700'>
          <strong>Start Date:</strong>{' '}
          {new Date(event.startDate).toLocaleDateString()}
        </p>
        <p className='mt-2 text-gray-700'>
          <strong>End Date:</strong>{' '}
          {new Date(event.endDate).toLocaleDateString()}
        </p>
        <p className='mt-2 text-gray-700'>
          <strong>Status:</strong>{' '}
          {event.isPast ? 'Past Event' : 'Upcoming Event'}
        </p>
      </div>
      <Link
        href='/events'
        className='bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg'
      >
        Back to Events
      </Link>
    </div>
  );
};

export default EventDetails;
