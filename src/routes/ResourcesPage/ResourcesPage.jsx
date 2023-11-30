import mockTradingScreenshot from 'assets/quantsoc-graphics/mock-trading-screenshot.svg';
import ResourceOutline from 'components/ResourceOutline';
import HeroSection from './HeroSection/HeroSection';
import WorkshopSection from './WorkshopSection/WorkshopSection';
import OpportunitiesSection from './OpportunitiesSection/OpportunitiesSection';

const ResourcesPage = () => {
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
      <WorkshopSection />
      <OpportunitiesSection />
    </div>
  );
};
export default ResourcesPage;
