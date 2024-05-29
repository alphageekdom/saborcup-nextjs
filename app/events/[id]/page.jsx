import EventDetails from '@/components/events/EventDetails';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const EventDetailsPage = ({ params }) => {
  return (
    <section className='bg-gray-100 container mx-auto p-12'>
      <EventDetails params={params} />
    </section>
  );
};

export default EventDetailsPage;
