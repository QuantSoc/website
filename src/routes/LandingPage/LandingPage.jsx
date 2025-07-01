import EventsSection from './EventsSection/EventsSection';
import HeroSection from './HeroSection/HeroSection';
import SponsorshipSection from './SponsorshipSection/SponsorshipSection';
// import AboutUsPage from 'routes/AboutUsPage';
import GamesSection from 'components/GamesSection/GameSection';

import './index.less';

import AboutUsSection from './AboutUsSection/AboutUsSection';
import { HashLink } from 'react-router-hash-link';


const LandingPage = () => {
  return (
    <div className="page">
      <HeroSection />
      <div className='main-body'>
        
        <div className='landing-page__container' id='about-us'><AboutUsSection /></div>
      
        <div id='events' className=' landing-page__container'><EventsSection /></div>

        <div className='landing-page__container' id='resources'><GamesSection />
        <HashLink to={'/resources#'} className='more-resources-button'>See More → </HashLink>
        </div>

        <div className='landing-page__container' id='sponsorships'><SponsorshipSection /></div>

        <div>
        </div>
      </div>
     
    </div>
  );
};
export default LandingPage;
