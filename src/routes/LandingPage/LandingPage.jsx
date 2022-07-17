import './index.scss';
import SplashSection from './SplashSection';
import ResourceSection from '../ResourceSection';
import SponsorSection from './SponsorSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section><SplashSection /></section>
      <section>2. About Us</section>
      <section>3. Learn Connect Network</section>
      <section>4. Events - Lorem Ipsum</section>
      <section>5. Be Part of or next event</section>
      <section><ResourceSection /></section>
      <section><SponsorSection /></section>
    </div>
  );
};

export default LandingPage;
