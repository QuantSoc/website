
import RedirectButton from 'components/RedirectButton/RedirectButton';
import eventGathering from 'assets/quantsoc-graphics/event-gathering-alt.svg';
import './index.less';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-item">
        <img
          src={eventGathering}
          alt="quantsoc-hero-section-event-gathering-graphic"
          className="hero-img"
          loading="eager"
        />
      </div>

      <div className="hero-item stack">
        <h1 className="hero-heading">The Official Quantsoc Newsletter</h1>
        <p className="text-body">
        Welcome to our fortnightly newsletter! Our team has been hard at work to bring you the latest financial news, 
        exciting job opportunities, and details about our upcoming events. 
        <br /> Stay informed and connected with us as we keep you updated on all the important happenings.
        </p>

        <div className="socials-buttons">
          <RedirectButton btnText="Sign Up" destination="https://docs.google.com/forms/d/e/1FAIpQLSfzxswnxt3i2kA6ShYJ-OLb3iJnvRLtm4g83wkzhzECannTNA/viewform?pli=1" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

