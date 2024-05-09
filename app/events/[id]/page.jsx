import React from 'react';
import EventDetails from '@/components/EventDetails';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const EventDetailsPage = ({ params }) => {
  const crumbs = [
    { title: 'Events', path: '/events' },
    { title: 'Event', path: `/events/${params.id}` },
  ];
  return (
    <section className='bg-gray-100 py-16'>
      <Breadcrumbs crumbs={crumbs} />
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold text-center text-blue-600 mb-12'>
          Event Details
        </h1>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <EventDetails eventId={params.id} />
        </div>
      </div>
    </section>
  );
};

export default EventDetailsPage;
