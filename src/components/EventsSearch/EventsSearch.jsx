import EventCard from 'components/EventCard';
import './index.less';
import { useState } from 'react';
import useModal from 'hooks/useModal';
import EventModal from 'components/EventModal';
import quantsocEvents from '../../data/events.json';

const EventsSearch = ({ searchRestriction }) => {
  const events = quantsocEvents.filter((event) => {
    return searchRestriction(event);
  });

  const [eventIndex, setEventIndex] = useState(0);
  const [eventsFilter, setEventsFilter] = useState('');
  const { isOpen, toggleModal } = useModal();

  return (
    <div className="events-search-section">
      <input
        className="events-search__search"
        type="text"
        placeholder="Search events"
        onChange={(e) => {
          setEventsFilter(e.target.value);
        }}
      />
      {
        events.length > 0
          ? (
            <div>
              <div className="events-search__events">
                {events
                  .filter((event) => {
                    if (!eventsFilter) return event;
                    const sample = Object.values(event).join('');
                    return (
                      sample.toLowerCase().includes(eventsFilter.toLowerCase()) && event
                    );
                  })
                  .map((event, index) => {
                    return (
                      <EventCard
                        key={event.header + event.startDate}
                        toggleModal={toggleModal}
                        index={index}
                        setEventIndex={setEventIndex}
                        header={event.header}
                        location={event.location}
                        sublocation={event.sublocation}
                        startDate={event.startDate}
                        endDate={event.endDate}
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
            <div className="no-opportunities-text">
              <p>There are no upcoming opportunities at this time.</p>
            </div>
          )
      }
    </div>
  );
};
export default EventsSearch;
