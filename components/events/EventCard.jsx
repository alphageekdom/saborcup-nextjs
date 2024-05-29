import Link from 'next/link';
import Image from 'next/image';

const EventCard = ({ event }) => {
  const cardClass = event.isPast ? 'opacity-50' : 'opacity-100';
  const textClass = event.isPast ? 'text-gray-500' : 'text-black';

  return (
    <article
      className={`p-4 rounded-lg shadow-lg hover-shadow transition transform hover:scale-105 ${cardClass}`}
      aria-labelledby={`event-title-${event.id}`}
      aria-describedby={`event-description-${event.id}`}
      tabIndex='0'
    >
      <Image
        src={event?.image}
        alt={`${event.title} event`}
        width={500}
        height={500}
        className='w-full h-56 object-cover rounded-md mb-4'
      />
      <h2
        id={`event-title-${event.id}`}
        className={`text-2xl font-semibold mb-2 ${textClass}`}
      >
        {event.title}
      </h2>
      <p
        id={`event-summary-${event.id}`}
        className={`text-sm mb-4 ${
          event.isPast ? 'text-gray-500' : 'text-gray-700'
        }`}
      >
        {event.summary}
      </p>
      <div className='flex justify-between items-center'>
        <time
          className={`text-sm ${
            event.isPast ? 'text-gray-500' : 'text-gray-600'
          }`}
          dateTime={`${event.startDate}`}
        >
          {new Date(event.startDate).toLocaleDateString()} -{' '}
          {new Date(event.endDate).toLocaleDateString()}
        </time>
        {!event.isPast && (
          <Link
            href={`/events/${event.id}`}
            className='bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-4 rounded-md text-md shadow-lg'
            aria-label={`Learn more about ${event.title}`}
          >
            Learn More
          </Link>
        )}
      </div>
    </article>
  );
};

export default EventCard;
