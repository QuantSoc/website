import './index.scss';

import AboutUsSection from './AboutUsSection/AboutUsSection';
import SplashSection from './SplashSection';
import ResourceSection from './ResourceSection';
import EventsPreview from './EventsPreviewSection';
import EventsBanner from './EventsBanner';
import SponsorSection from './SponsorSection';
import MainBanner from './MainBannerSection/MainBannerSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section><SplashSection /></section>
      <section><MainBanner /></section>
      <section><AboutUsSection /></section>
      <section><EventsBanner /></section>
      <section><EventsPreview /></section>
      <section><ResourceSection /></section>
      <section><SponsorSection /></section>
    </div>
  );
};

export default LandingPage;
