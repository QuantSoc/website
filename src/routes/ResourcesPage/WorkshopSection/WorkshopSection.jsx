import EventsCarousel from 'components/EventsCarousel';

const WorkshopSection = () => {
  return (
    <section className="events-section">
      <h1 className="events-section__header">Workshops</h1>
      <p>Explore our workshops designed to refine your skills!</p>
      <EventsCarousel
        eventsFilterCondition={(event) => {
          return event.tagType === 'workshop' ? event : null;
        }}
      />
    </section>
  );
};
export default WorkshopSection;
