import mockTradingScreenshot from 'assets/quantsoc-graphics/mock-trading-screenshot.svg';
import ResourceOutline from 'components/ResourceOutline';
import EventsSection from './EventsSection/EventsSection';
import ResourcesSection from './ResourcesSection/ResourcesSection';
import HeroSection from './HeroSection/HeroSection';
import SponsorshipSection from '../../components/SponsorshipSection';
// import AboutUsPage from 'routes/AboutUsPage';
import GamesSection from 'components/GamesSection/GameSection';

import './index.less';
import WelcomeSection from './WelcomeSection/WelcomeSection';

import AboutUsSection from './AboutUsSection/AboutUsSection';
import { HashLink } from 'react-router-hash-link';

import PastEventSection from './PastEventSection/PastEventSection';


const LandingPage = () => {
  return (
    <div className="page">
      <HeroSection />
      <div className='main-body'>
        {/* <AboutUsPage /> */}
        <div className='landing-page__container' id='about-us'><AboutUsSection /></div>
        
        <div className='landing-page__container'><PastEventSection /></div>
        
        <div id='events' className=' landing-page__container'><EventsSection /></div>

        <div className='landing-page__container' id='resources'><GamesSection />
        <HashLink to={'/resources#'} className='more-resources-button'>View More → </HashLink>
        </div>
        <div className='landing-page__container' id='sponsorships'><SponsorshipSection /></div>
      </div>
     
    </div>
  );
};
export default LandingPage;
