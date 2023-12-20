import mockTradingScreenshot from 'assets/quantsoc-graphics/mock-trading-screenshot.svg';
import ResourceOutline from 'components/ResourceOutline';
import EventsSection from './EventsSection/EventsSection';
import ResourcesSection from './ResourcesSection/ResourcesSection';
import HeroSection from './HeroSection/HeroSection';
import SponsorshipSection from '../../components/SponsorshipSection';

const LandingPage = () => {
  return (
    <div className="page">
      <HeroSection />
      <ResourceOutline
        outlineTitle="Mock Trading Game"
        index={0}
        imgSrc={mockTradingScreenshot}
        redirectLink="https://mtg.quantsoc.org"
        redirectBtnText="Play"
      >
        <p>
          Dive into the fast-paced world of trading, hone your investment
          strategies, and compete with fellow traders in a mock environment.
          Create your own markets and play amongst your friends.
        </p>
        <br />
        <p>Learn, compete and have fun in QuantSoc&apos;s Mock Trading Game!</p>
      </ResourceOutline>
      <EventsSection />
      <ResourcesSection />
      <SponsorshipSection />
    </div>
  );
};
export default LandingPage;
