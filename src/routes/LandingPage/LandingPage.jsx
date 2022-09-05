import './index.scss';

import SplashSection from './SplashSection';
import ResourceSection from '../ResourceSection';
import EventsPreview from './EventsPreviewSection';
import EventsBanner from './EventsBanner';
import SponsorSection from './SponsorSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section><SplashSection /></section>
      <section>2. About Us</section>
      <section>3. Learn Connect Network</section>
      {/* <section><EventsBanner /></section> */}
      {/* <section><EventsPreview /></section> */}
      {/* <section><ResourceSection /></section> */}
      {/* <section><SponsorSection /></section> */}
    </div>
  );
};

export default LandingPage;
