import SocialsButton from 'components/SocialsButton/SocialsButton';
import eventGathering from '../../../assets/event-gathering.svg';
import {
  BsFacebook,
  BsDiscord,
} from 'react-icons/bs';
import './index.less';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <section className="hero-section">
        <div className="hero-item">
          <img
            src={eventGathering}
            alt="quantsoc-hero-section-event-gathering-graphic"
            className="hero-img"
          />
        </div>

        <div className="hero-item stack">
          <h1 className="hero-heading">Events</h1>
          <p className="text-body">
          We run a wide-variety of events for fun, learning new skills and careers. 
          Keep up to date with the latest workshops, competitions, games nights, company meet-and-greets, 
          and more events via Facebook or Discord!
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            <SocialsButton iconStyle={{ width: '25px', height: '25px', marginLeft: '6px' }} btnText="Facebook" sociallink="https://www.facebook.com/unswquantsoc/" IconComponent={BsFacebook} />
            <SocialsButton iconStyle={{ width: '25px', height: '24px', marginLeft: '6px' }} btnText="Discord" sociallink="https://discord.gg/2qYRNKubRz" IconComponent={BsDiscord} />
          </div>
        </div>

      </section>
    </div>
  );
};
export default HeroSection;



