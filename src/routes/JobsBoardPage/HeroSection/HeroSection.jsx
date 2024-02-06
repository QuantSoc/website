import { BsFacebook, BsDiscord, BsInstagram } from 'react-icons/bs';
import SocialsButton from 'components/SocialsButton/SocialsButton';
import eventGathering from 'assets/quantsoc-graphics/event-gathering.svg';
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
        <h1 className="hero-heading">Jobs Board</h1>
        <p className="text-body">
          Coming Soon!
        </p>
      </div>
    </section>
  );
};
export default HeroSection;
