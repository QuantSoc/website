import EventsSection from 'routes/LandingPage/EventsSection/EventsSection';
import HeroSection from './HeroSection/HeroSection';
import PastEventsSection from './PastEventsSection/PastEventsSection';

const EventsPage = () => {
  return (
    <div className="page">
      <HeroSection />
      <EventsSection isEventPage />
      <PastEventsSection />
    </div>
  );
};
export default EventsPage;
