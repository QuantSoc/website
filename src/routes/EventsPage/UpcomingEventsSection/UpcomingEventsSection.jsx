import EventsCarousel from 'components/EventsCarousel';

const UpcomingEventsSection = () => {
  return (
    <section className="events-section">
      <h1 className="events-section__header">Upcoming Events</h1>
      <EventsCarousel
        eventsFilterCondition={(event) => {
          return new Date(event.date) >= new Date() ? event : null;
        }}
      />
    </section>
  );
};
export default UpcomingEventsSection;
