import EventsSearch from 'components/EventsSearch';

const OpportunitiesSection = () => {
  return (
    <section className="opportunities__section">
      <h1 className="opportunities__header">Upcoming Opportunities</h1>
      <EventsSearch
        searchRestriction={(event) => {
          // prettier-ignore
          return new Date(event.endDate) >= new Date()
            && event.tagType === 'opportunity'
            ? event
            : null;
        }}
      />
    </section>
  );
};
export default OpportunitiesSection;
