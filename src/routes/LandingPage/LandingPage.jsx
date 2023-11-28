import EventsSection from './EventsSection/EventsSection';
import HeroSection from './HeroSection/HeroSection';
import SponsorshipSection from '../../components/SponsorshipSection';

const LandingPage = () => {
  return (
    <div className="page">
      <HeroSection />
      <EventsSection />
      <SponsorshipSection />
    </div>
  );
};
export default LandingPage;
