import mockTradingScreenshot from 'assets/quantsoc-graphics/mock-trading-screenshot.svg';
import ResourceOutline from 'components/ResourceOutline';
import EventsSection from './EventsSection/EventsSection';
import ResourcesSection from './ResourcesSection/ResourcesSection';
import HeroSectionNew from './HeroSectionNew/HeroSectionNew';
import SponsorshipSection from '../../components/SponsorshipSection';
// import AboutUsPage from 'routes/AboutUsPage';
import GamesSection from 'components/GamesSection/GameSection';

import './index.less';
import WelcomeSection from './WelcomeSection/WelcomeSection';

import AboutUsSection from './AboutUsSection/AboutUsSection';


const LandingPage = () => {
  return (
    <div className="page">
      <HeroSectionNew />
      <div className='main-body'>
        {/* <AboutUsPage /> */}
        <div className='landing-page__container'><AboutUsSection /></div>
        
        <WelcomeSection hideRedirect/>


        <div id='landing-page__events'><EventsSection /></div>

        <div className='landing-page__container'><GamesSection /></div>
        <div className='landing-page__container' id='landing-page__sponsorships'><SponsorshipSection /></div>
      </div>
     
    </div>
  );
};
export default LandingPage;
