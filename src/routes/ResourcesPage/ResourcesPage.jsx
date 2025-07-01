
import HeroSection from './HeroSection/HeroSection';
import JobListings from './JobListingsSection/JobListings';
import GamesSection from 'components/GamesSection/GameSection';


import './index.less';


const ResourcesPage = () => {
  return (
    <div className="page" id='resources-page'>
      <HeroSection />
      {/* separate div to ensure universal focusability of anchor */}
      <GamesSection className='articles-page-body' />
      {/* <WorkshopSection anchorTag="workshops" /> */}
      <JobListings className='articles-page-body' />
      
    </div>
  );
};
export default ResourcesPage;
