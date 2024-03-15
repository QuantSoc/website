import './index.less';
import { useEffect, useState } from 'react';
import useModal from 'hooks/useModal';

import Carousel from 'components/Carousel/Carousel';
import EventCard from 'components/EventCard';
import EventModal from 'components/EventModal';

import eventsData from '../../data/events.json';

import {
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore'
import { db } from '../../firebase.config'

const setInitialStep = () => {
  if (window.innerWidth <= 950) return 1;
  if (window.innerWidth <= 1400) return 2;
  return 3;
};

const EventsCarousel = ({ eventsFilterCondition }) => {
  const [preevents, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const eventsRef = collection(db, 'events');
				const q = query(
					eventsRef,
				);
				const querySnap = await getDocs(q);
				const preevents = [];
				querySnap.forEach((doc) => {
					return preevents.push(doc.data())
				});
				setEvents(preevents);
				setLoading(false);
			} catch (error) {
				setError(true);
			}
		}
		fetchEvents()
	}, [])

  const events = preevents.filter((event) => {
    return eventsFilterCondition(event);
  });

  const [eventIndex, setEventIndex] = useState(0);
  const [step, setStep] = useState(setInitialStep());
  const { isOpen, toggleModal } = useModal();

  useEffect(() => {
    const mediumQuery = window.matchMedia('(max-width: 1400px)');
    const smallQuery = window.matchMedia('(max-width: 950px)');

    const handleMediumQueryChange = (event) => {
      if (event.matches) setStep(2);
      if (!event.matches) setStep(3);
    };
    const handleSmallQueryChange = (event) => {
      if (event.matches) setStep(1);
      if (!event.matches) setStep(2);
    };

    mediumQuery.addEventListener('change', handleMediumQueryChange);
    smallQuery.addEventListener('change', handleSmallQueryChange);
    return () => {
      mediumQuery.removeEventListener('change', handleMediumQueryChange);
      smallQuery.removeEventListener('change', handleSmallQueryChange);
    };
  }, []);

  const createEventSlides = () => {
    const eventSlides = [];
    for (let i = 0; i < events.length; i += step) {
      const eventCards = [];
      for (let j = i; j < Math.min(i + step, events.length); j += 1) {
        // prettier-ignore
        eventCards.push(
          <EventCard
            key={`${events[j].header}-${j}`}
            toggleModal={toggleModal}
            index={j}
            setEventIndex={setEventIndex}
            header={events[j].header}
            location={events[j].location}
            sublocation={events[j].sublocation}
            startDate={events[j].startDate}
            endDate={events[j].endDate}
            times={events[j].times}
            image={events[j].image}
            tagType={events[j].tagType}
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
    <>
    {loading ? "Loading..." :
      <div className="event-carousel-section">
        {
          events.length > 0
            ? (
              <div>
                <Carousel slides={createEventSlides()} />
                <EventModal
                  isOpen={isOpen}
                  toggleModal={toggleModal}
                  header={events[eventIndex].header}
                  location={events[eventIndex].location}
                  sublocation={events[eventIndex].sublocation}
                  startDate={events[eventIndex].startDate}
                  endDate={events[eventIndex].endDate}
                  tagType={events[eventIndex].tagType}
                  image={events[eventIndex].image}
                  times={events[eventIndex].times}
                  cohosts={events[eventIndex].cohosts}
                  link={events[eventIndex].link}
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
              </div>
            )
            : (
              <div className="no-events-text">
                There are no upcoming events at this time.
              </div>
            )
        }
      </div>
    }
    </>
  );
};
export default EventsCarousel;
