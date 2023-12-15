import EventsSearch from 'components/EventsSearch';

const PastEventsSection = () => {
  return (
    <section className="past-events">
      <h1 className="past-events__header">Past Events</h1>
      <EventsSearch
        searchRestriction={(event) => {
          return event.showAsEvent && new Date(event.endDate) < new Date()
            ? event
            : null;
        }}
      />
    </section>
  );
};
export default PastEventsSection;
