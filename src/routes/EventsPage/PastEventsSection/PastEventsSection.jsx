import EventsSearch from 'components/EventsSearch';

const PastEventsSection = () => {
  return (
    <section className="past-events">
      <h1 className="past-events__header">Past Events</h1>
      <EventsSearch
        searchRestriction={(event) => {
          return new Date(event.date) < new Date() ? event : null;
        }}
      />
    </section>
  );
};
export default PastEventsSection;
