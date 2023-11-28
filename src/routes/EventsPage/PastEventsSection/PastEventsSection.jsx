import EventCard from 'components/EventCard';
import './index.less';
import { useState } from 'react';
import useModal from 'hooks/useModal';
import EventModal from 'components/EventModal';

const events = [
  {
    header: 'Mock Trading Session',
    location: 'UNSW',
    sublocation: 'Theatre 1',
    date: '27 November 2023',
    times: '5pm → 7pm',
    cohosts: 'PiSoc',
    tagType: 'trading',
    image: 'https://unsplash.it/1280/720',
    body: 'Are YOU a student interested in what options trading is? Do YOU want to know how to make money with your skills? Quantsoc is partnering up with the Personal Investment Society to bring you our Options Trading Workshop!',
  },
  {
    header: 'SIG Poker Night',
    location: 'SIG Office',
    sublocation: 'Theatre 1',
    date: '28 November 2023',
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
    date: '29 November 2023',
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
    date: '30 November 2023',
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
    date: '2 December 2023',
    times: '5pm → 7pm',
    cohosts: 'PiSoc',
    tagType: 'career',
    image: 'https://unsplash.it/1920/1080',
    body: "Are YOU a student interested in what options trading is? Do YOU want to know how to make money with your skills? Quantsoc is partnering up with the Personal Investment Society to bring you our Options Trading Workshop!\nCome bring yourself and all your friends to QuantSoc x Pisoc's Options Trading workshop on Wednesday, 14th of June 5:00pm to 7:00pm at Mathews 104! This workshop is open to people with ALL levels of knowledge.\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet eaque beatae error sint, cupiditate nostrum sapiente eius voluptatum, cum eum aliquam modi laboriosam. Reprehenderit itaque dignissimos earum necessitatibus. Sapiente.",
  },
];

const PastEventsSection = () => {
  const [eventIndex, setEventIndex] = useState(0);
  const [eventsFilter, setEventsFilter] = useState('');
  const { isOpen, toggleModal } = useModal();

  return (
    <section className="past-events">
      <h1 className="past-events__header">Past Events</h1>
      <input
        className="past-events__search"
        type="text"
        placeholder="Search events"
        onChange={(e) => {
          setEventsFilter(e.target.value);
        }}
      />
      <div className="past-events__events">
        {events
          .filter((event) => {
            if (!eventsFilter) return event;
            const sample = [
              event.header,
              event.body,
              event.date,
              event.location,
              event.sublocation,
              event.times,
              event.cohosts,
              event.tagType,
            ].join('');
            return (
              sample.toLowerCase().includes(eventsFilter.toLowerCase()) && event
            );
          })
          .map((event, index) => {
            return (
              <EventCard
                key={event.header + event.date}
                toggleModal={toggleModal}
                index={index}
                setEventIndex={setEventIndex}
                header={event.header}
                location={event.location}
                sublocation={event.sublocation}
                date={event.date}
                times={event.times}
                image={event.image}
                tagType={event.tagType}
              />
            );
          })}
      </div>
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
export default PastEventsSection;
