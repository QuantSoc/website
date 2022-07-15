import './index.scss';
import ResourceSection from '../ResourceSection';
import EventsBanner from './EventsBanner';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section>1. Main Introduction</section>
      <section>2. About Us</section>
      <section>3. Learn Connect Network</section>
      <section><EventsBanner /></section>
      <section>5. Be Part of or next event</section>
      <section><ResourceSection /></section>
      <section>7. Sponsors</section>
    </div>
  );
};

export default LandingPage;
