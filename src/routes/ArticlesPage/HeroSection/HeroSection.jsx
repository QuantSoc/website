
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
        <h1>The Official Quantsoc Newsletter</h1>
        <p className="text-body">
        Welcome to our fortnightly newsletter! Our team has been hard at work to bring you the latest financial news, exciting job opportunities, and details about our upcoming events. 
        Stay informed and connected with us as we keep you updated on all the important happenings.
        </p>
        {!hideRedirect && (
          <RedirectButton btnText="Sign Up" destination="https://docs.google.com/forms/d/e/1FAIpQLSfzxswnxt3i2kA6ShYJ-OLb3iJnvRLtm4g83wkzhzECannTNA/viewform?pli=1" />
        )}
      </div>
    </section>
    );
};


export default HeroSection;
