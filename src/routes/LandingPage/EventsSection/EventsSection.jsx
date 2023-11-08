import Carousel from 'components/Carousel/Carousel';
import './index.less';
import EventCard from 'components/EventCard';
import { useEffect, useState } from 'react';
import useModal from 'hooks/useModal';
import EventModal from 'components/EventModal';

const events = [
  {
    header: 'Mock Trading Session',
    location: 'UNSW',
    sublocation: 'Theatre 1',
    date: new Date(),
    times: '5pm → 7pm',
    cohosts: 'PiSoc',
    tagType: 'trading',
    image: 'https://unsplash.it/1280/720',
    body: "Are YOU a student interested in what options trading is? Do YOU want to know how to make money with your skills? Quantsoc is partnering up with the Personal Investment Society to bring you our Options Trading Workshop!\nCome bring yourself and all your friends to QuantSoc x Pisoc's Options Trading workshop on Wednesday, 14th of June 5:00pm to 7:00pm at Mathews 104! This workshop is open to people with ALL levels of knowledge.",
  },
  {
    header: 'SIG Poker Night',
    location: 'SIG Office',
    sublocation: 'Theatre 1',
    date: new Date(),
    times: '5pm → 7pm',
    cohosts: 'PiSoc',
    tagType: 'fun',
    image: '',
    body: "Are YOU a student interested in what options trading is? Do YOU want to know how to make money with your skills? Quantsoc is partnering up with the Personal Investment Society to bring you our Options Trading Workshop!\nCome bring yourself and all your friends to QuantSoc x Pisoc's Options Trading workshop on Wednesday, 14th of June 5:00pm to 7:00pm at Mathews 104! This workshop is open to people with ALL levels of knowledge.",
  },
  {
    header: 'STEMS Career Fair',
    location: 'UNSW',
    sublocation: 'Leighton Hall',
    date: new Date(),
    times: '5pm → 7pm',
    cohosts: 'PiSoc',
    tagType: 'career',
    image: 'https://unsplash.it/1366/768',
    body: "Are YOU a student interested in what options trading is? Do YOU want to know how to make money with your skills? Quantsoc is partnering up with the Personal Investment Society to bring you our Options Trading Workshop!\nCome bring yourself and all your friends to QuantSoc x Pisoc's Options Trading workshop on Wednesday, 14th of June 5:00pm to 7:00pm at Mathews 104! This workshop is open to people with ALL levels of knowledge.",
  },
  {
    header: 'SIG Poker Night',
    location: 'SIG Office',
    sublocation: 'Theatre 1',
    date: new Date(),
    times: '5pm → 7pm',
    cohosts: 'PiSoc',
    tagType: 'fun',
    image: '',
    body: "Are YOU a student interested in what options trading is? Do YOU want to know how to make money with your skills? Quantsoc is partnering up with the Personal Investment Society to bring you our Options Trading Workshop!\nCome bring yourself and all your friends to QuantSoc x Pisoc's Options Trading workshop on Wednesday, 14th of June 5:00pm to 7:00pm at Mathews 104! This workshop is open to people with ALL levels of knowledge.",
  },
  {
    header: 'STEMS Career Fair',
    location: 'UNSW',
    sublocation: 'Leighton Hall',
    date: new Date(),
    times: '5pm → 7pm',
    cohosts: 'PiSoc',
    tagType: 'career',
    image: 'https://unsplash.it/1920/1080',
    body: "Are YOU a student interested in what options trading is? Do YOU want to know how to make money with your skills? Quantsoc is partnering up with the Personal Investment Society to bring you our Options Trading Workshop!\nCome bring yourself and all your friends to QuantSoc x Pisoc's Options Trading workshop on Wednesday, 14th of June 5:00pm to 7:00pm at Mathews 104! This workshop is open to people with ALL levels of knowledge.",
  },
];

const setInitialStep = () => {
  if (window.innerWidth <= 950) return 1;
  if (window.innerWidth <= 1400) return 2;
  return 3;
};

const EventsSection = () => {
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
    for (let i = 0; i < events.length; i += step) {
      const eventCards = [];
      for (let j = i; j < Math.min(i + step, events.length); j += 1) {
        eventCards.push(
          <EventCard
            key={`${events[j].header}-${j}`}
            toggleModal={toggleModal}
            index={j}
            setEventIndex={setEventIndex}
            header={events[j].header}
            location={events[j].location}
            sublocation={events[j].sublocation}
            date={events[j].date}
            times={events[j].times}
            image={events[j].image}
            tagType={events[j].tagType}
          />
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
      <h1 className="events-section__header">Events</h1>
      <p>Upcoming events to be excited for!</p>
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
