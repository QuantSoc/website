import './index.scss';

import AboutUsSection from './AboutUsSection/AboutUsSection';
import SplashSection from './SplashSection';
import ResourceSection from '../ResourceSection';
import EventsPreview from './EventsPreviewSection';
import EventsBanner from './EventsBanner';
import SponsorSection from './SponsorSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section>1. Main Introduction</section>
      <section><SplashSection /></section>
      <section>3. Learn Connect Network</section>
      <section><AboutUsSection /></section>
      <section><EventsPreview /></section>
      <section><EventsBanner /></section>
      <section><ResourceSection /></section>
      <section><SponsorSection /></section>
    </div>
  );
};

export default LandingPage;
