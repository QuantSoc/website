import mockTradingScreenshot from 'assets/quantsoc-graphics/mock-trading-screenshot.svg';
import ResourceOutline from 'components/ResourceOutline';
import EventsSection from './EventsSection/EventsSection';
import ResourcesSection from './ResourcesSection/ResourcesSection';
import HeroSectionNew from './HeroSectionNew/HeroSectionNew';
import SponsorshipSection from '../../components/SponsorshipSection';
import AboutUsPage from 'routes/AboutUsPage';

const LandingPage = () => {
  return (
    <div className="page">
      <HeroSectionNew />
      <AboutUsPage />
      <ResourceOutline
        outlineTitle="Mock Trading Game"
        index={0}
        imgSrc={mockTradingScreenshot}
        redirectLink="https://mtg.quantsoc.org"
        redirectBtnText="Play Now"
      >
        <p>
          Dive into the fast-paced world of trading, hone your investment
          strategies, and compete with fellow traders in a mock environment.
          <br/><br/>
        Learn, compete and have fun in QuantSoc&apos;s very ownMock Trading Game!</p>
      </ResourceOutline>
      <EventsSection />
      <ResourcesSection />
      <SponsorshipSection />
    </div>
  );
};
export default LandingPage;
