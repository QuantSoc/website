import HeroSection from './HeroSection/HeroSection';
import PastEventsSection from './PastEventsSection/PastEventsSection';
import UpcomingEventsSection from './UpcomingEventsSection/UpcomingEventsSection';

const EventsPage = () => {
  return (
    <div className="page">
      <HeroSection />
      <UpcomingEventsSection />
      <PastEventsSection />
    </div>
  );
};
export default EventsPage;
