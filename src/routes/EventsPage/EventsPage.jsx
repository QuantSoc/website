import HeroSection from './HeroSection/HeroSection';
import PastEventsSection from './PastEventsSection/PastEventsSection';
import UpcomingEventsSection from './UpcomingEventsSection/UpcomingEventsSection';

import './index.less';

const EventsPage = () => {
  return (
    <div className="page" id="events-page">
      <HeroSection />
      <UpcomingEventsSection />
      <PastEventsSection />
    </div>
  );
};
export default EventsPage;
