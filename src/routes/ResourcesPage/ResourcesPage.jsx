import mockTradingScreenshot from 'assets/quantsoc-graphics/mock-trading-screenshot.svg';
import ResourceOutline from 'components/ResourceOutline';
import HeroSection from './HeroSection/HeroSection';
import WorkshopSection from './WorkshopSection/WorkshopSection';
import JobListings from './JobListingsSection/JobListings';
import './index.less';

import GamesSection from 'components/GamesSection/GameSection';

const ResourcesPage = () => {
  return (
    <div className="page" id='resources-page'>
      <HeroSection />
      {/* separate div to ensure universal focusability of anchor */}
      <GamesSection />
      {/* <WorkshopSection anchorTag="workshops" /> */}
      <JobListings />
      
    </div>
  );
};
export default ResourcesPage;
