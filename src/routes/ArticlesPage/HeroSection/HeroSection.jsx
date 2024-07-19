
import eventGathering from 'assets/quantsoc-graphics/event-gathering-alt.svg';
import RedirectButton from 'components/RedirectButton/RedirectButton';

import './index.less';


const HeroSection = ({ hideRedirect = false }) => {
    return (
    <section className='register-section'>
      <div className="hero-item">
        <img
          src={eventGathering}
          alt="quantsoc-hero-section-event-gathering-graphic"
          className="hero-img"
        />
      </div>
      <div className="hero-item stack">
        <h1>Quantsoc Newsletter</h1>
        <p className="text-body">
          Welcome to our fortnightly newsletter. Our team has been working hard so that you can keep up to date with the latest news, learn about new and exciting theories, 
          be notified of job opportunities and events and maybe even contemplate on difficult problems and puzzles!
        </p>
        {!hideRedirect && (
          <RedirectButton btnText="Sign Up" destination="https://docs.google.com/forms/d/e/1FAIpQLSfzxswnxt3i2kA6ShYJ-OLb3iJnvRLtm4g83wkzhzECannTNA/viewform?pli=1" />
        )}
      </div>
    </section>
    );
};


export default HeroSection;
