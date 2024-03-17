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
          As one of Australia's largest and most accomplished
          student societies in the field of quantitative trading and finance, 
          we aim to connect industry leaders with brilliant students.
          If you would like to add your company listings to this page,
          please <a className="link" href="mailto:unsw.quantsoc@gmail.com">
          email us here!</a>
        </p>
        <p>
          If you are a student, we highly recommend you follow our social media channels for unique
          career opportunities!
        </p>
      </div>
    </section>
  );
};
export default HeroSection;
