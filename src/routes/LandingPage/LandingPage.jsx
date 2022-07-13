import './index.scss';

import AboutUsSection from './AboutUsSection/AboutUsSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section>1. Main Introduction</section>
      <AboutUsSection />
      <section>3. Learn Connect Network</section>
      <section>4. Events - Lorem Ipsum</section>
      <section>5. Be Part of or next event</section>
      <section>6. Resources</section>
      <section>7. Sponsors</section>
    </div>
  );
};

export default LandingPage;
