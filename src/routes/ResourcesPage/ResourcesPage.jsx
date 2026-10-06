
import HeroSection from './HeroSection/HeroSection';
import JobListings from './JobListingsSection/JobListings';
import GamesSection from 'components/GamesSection/GameSection';
import WorkshopsSection from 'components/WorkshopsSection/WorkshopsSection';


import './index.less';


const ResourcesPage = () => {
  return (
    <div className="page" id='resources-page'>
      <HeroSection />
      {/* separate div to ensure universal focusability of anchor */}
      <GamesSection className='articles-page-body' />
      <div id="workshops">
        <WorkshopsSection className='articles-page-body' />
      </div>
      <JobListings className='articles-page-body' />
      
    </div>
  );
};
export default ResourcesPage;
