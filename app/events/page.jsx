import HeaderImage from '@/components/common/HeaderImage';
import Events from '@/components/events/Events';

const EventsPage = () => {
  return (
    <section className='bg-white'>
      <HeaderImage imageUrl='https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D'>
        <h1 className='text-4xl md:text-5xl font-bold'>Our Events</h1>
        <p className='text-lg md:text-xl'>
          Come and discover the beauty of culture and feel embraced by our
          SaborCup community.
        </p>
      </HeaderImage>
      <div className='container mx-auto p-12'>
        <Events />
      </div>
    </section>
  );
};

export default EventsPage;
