import './index.scss';
import ResourceSection from '../ResourceSection';
import EventsPreview from './EventsPreviewSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section>1. Main Introduction</section>
      <section>2. About Us</section>
      <section>3. Learn Connect Network</section>
      <section>4. Events - Lorem Ipsum</section>
      <section><EventsPreview /></section>
      <section><ResourceSection /></section>
      <section>7. Sponsors</section>
    </div>
  );
};

export default LandingPage;
