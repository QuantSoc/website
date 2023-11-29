import mockTradingScreenshot from 'assets/quantsoc-graphics/mock-trading-screenshot.svg';
import HeroSection from './HeroSection/HeroSection';
import ResourceOutline from './ResourceOutline/ResourceOutline';
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
      />
      <WorkshopSection />
      <OpportunitiesSection />
    </div>
  );
};
export default ResourcesPage;
