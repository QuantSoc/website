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

import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="page">
      <HeroSection />
      <div className='main-body'>
        {/* <AboutUsPage /> */}
        <div className='landing-page__container' id='about-us'><AboutUsSection /></div>
        <WelcomeSection hideRedirect/>
        <div id='events'><EventsSection /></div>

        <div className='landing-page__container' id='resources'><GamesSection />
        <Link to={'/resources'} className='more-resources-button'>More Resources → </Link>
        </div>
        <div className='landing-page__container' id='sponsorships'><SponsorshipSection /></div>
      </div>
     
    </div>
  );
};
export default LandingPage;
