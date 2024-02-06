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
        <h1 className="hero-heading">Events</h1>
        <p className="text-body">
          We run a wide-variety of events for fun, learning new skills and
          careers. Keep up to date with the latest workshops, competitions,
          games nights, company meet-and-greets, and more events via Facebook, 
          Instagram or Discord!
        </p>

        <div className="socials-buttons">
          <SocialsButton
            btnText="Facebook"
            socialsLink="https://www.facebook.com/unswquantsoc/"
            IconComponent={BsFacebook}
          />
          <SocialsButton
            btnText="Instagram"
            socialsLink="https://www.instagram.com/quantsoc_unsw/"
            IconComponent={BsInstagram}
          />
          <SocialsButton
            btnText="Discord"
            socialsLink="https://discord.gg/2qYRNKubRz"
            IconComponent={BsDiscord}
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
