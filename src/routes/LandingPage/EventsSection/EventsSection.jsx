import Carousel from 'components/Carousel/Carousel';
import './index.less';
import EventCard from 'components/EventCard';
import { useEffect, useState } from 'react';
import useModal from 'hooks/useModal';
import EventModal from 'components/EventModal';
import quantsocEvents from '../../../data/events.json';

const events = quantsocEvents.filter((event) => {
  return new Date(event.date) >= new Date() ? event : null;
});

const setInitialStep = () => {
  if (window.innerWidth <= 950) return 1;
  if (window.innerWidth <= 1400) return 2;
  return 3;
};

const EventsSection = ({ isEventPage = false }) => {
  const [eventIndex, setEventIndex] = useState(0);
  const [step, setStep] = useState(setInitialStep());
  const { isOpen, toggleModal } = useModal();

  useEffect(() => {
    const mediaQueryMedium = window.matchMedia('(max-width: 1400px)');
    const mediaQuerySmall = window.matchMedia('(max-width: 950px)');

    const handleMediaQueryMediumChange = (event) => {
      if (event.matches) setStep(2);
      if (!event.matches) setStep(3);
    };
    const handleMediaQuerySmallChange = (event) => {
      if (event.matches) setStep(1);
      if (!event.matches) setStep(2);
    };

    mediaQueryMedium.addEventListener('change', handleMediaQueryMediumChange);
    mediaQuerySmall.addEventListener('change', handleMediaQuerySmallChange);
  }, []);

  const createEventSlides = () => {
    const eventSlides = [];
    const upcomingEvents = events.filter((event) => {
      return new Date(event.date) >= new Date() && event;
    });
    for (let i = 0; i < upcomingEvents.length; i += step) {
      const eventCards = [];
      for (let j = i; j < Math.min(i + step, upcomingEvents.length); j += 1) {
        // prettier-ignore
        eventCards.push(
          <EventCard
            key={`${upcomingEvents[j].header}-${j}`}
            toggleModal={toggleModal}
            index={j}
            setEventIndex={setEventIndex}
            header={upcomingEvents[j].header}
            location={upcomingEvents[j].location}
            sublocation={upcomingEvents[j].sublocation}
            date={upcomingEvents[j].date}
            times={upcomingEvents[j].times}
            image={upcomingEvents[j].image}
            tagType={upcomingEvents[j].tagType}
          />,
        );
      }
      eventSlides.push({
        id: `event-slide-${i}`,
        slide: <div className="event-carousel__slide">{eventCards}</div>,
      });
    }
    return eventSlides;
  };
  return (
    <section className="events-section">
      <h1 className="events-section__header">
        {isEventPage ? 'Upcoming Events' : 'Events'}
      </h1>
      {!isEventPage && <p>Upcoming events to be excited for!</p>}
      <Carousel slides={createEventSlides()} />
      <EventModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        header={events[eventIndex].header}
        location={events[eventIndex].location}
        sublocation={events[eventIndex].sublocation}
        date={events[eventIndex].date}
        tagType={events[eventIndex].tagType}
        image={events[eventIndex].image}
        times={events[eventIndex].times}
        cohosts={events[eventIndex].cohosts}
        tagIcon={events[eventIndex].tagIcon}
      >
        {events[eventIndex].body.split('\n').map((paragraph) => {
          return (
            <p key={`event-modal-body-${paragraph.slice(0, 10)}`}>
              {paragraph}
            </p>
          );
        })}
      </EventModal>
    </section>
  );
};
export default EventsSection;
