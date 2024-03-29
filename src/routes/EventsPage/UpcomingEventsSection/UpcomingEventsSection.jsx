import EventsCarousel from 'components/EventsCarousel';

const UpcomingEventsSection = () => {
  return (
    <section className="events-section">
      <h1 className="events-section__header">Upcoming Events</h1>
      <EventsCarousel
        eventsFilterCondition={(event) => {
          return event.showAsEvent && new Date(event.endDate) >= new Date()
            ? event
            : null;
        }}
      />
    </section>
  );
};
export default UpcomingEventsSection;
