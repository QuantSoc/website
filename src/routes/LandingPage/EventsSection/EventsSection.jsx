import EventsCarousel from 'components/EventsCarousel';

const EventsSection = () => {
  return (
    <section className="events-section">
      <h1 className="events-section__header">Events</h1>
      <p>Upcoming events to be excited for!</p>
      <EventsCarousel
        eventsFilterCondition={(event) => {
          return event.showAsEvent && new Date(event.date) >= new Date()
            ? event
            : null;
        }}
      />
    </section>
  );
};
export default EventsSection;
