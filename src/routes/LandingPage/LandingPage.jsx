import mockTradingScreenshot from 'assets/quantsoc-graphics/mock-trading-screenshot.svg';
import ResourceOutline from 'components/ResourceOutline';
import EventsSection from './EventsSection/EventsSection';
import ResourcesSection from './ResourcesSection/ResourcesSection';
import HeroSectionNew from './HeroSectionNew/HeroSectionNew';
import SponsorshipSection from '../../components/SponsorshipSection';
import AboutUsPage from 'routes/AboutUsPage';
import GamesSection from 'components/GamesSection/GameSection';
import AboutSection from './AboutSection/AboutSection';

import './index.less';


const LandingPage = () => {
  return (
    <div className="page">
      <HeroSectionNew />
      <div className='main-body'>
        <AboutSection/>
        <GamesSection />
        <EventsSection />
        <SponsorshipSection />
      </div>
     
    </div>
  );
};
export default LandingPage;
