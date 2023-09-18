import RedirectButton from 'components/RedirectButton/RedirectButton';
import eventGathering from '../../../assets/event-gathering.svg';
import './index.less';

const EventSlide = () => {
  return (
    <section className="hero-section">
      <div className="hero-item">
        <img
          src={eventGathering}
          alt="quantsoc-hero-section-event-gathering-graphic"
          className="hero-img"
        />
      </div>
      <div className="hero-item stack">
        <h1 className="hero-heading">Upcoming Events at QuantSoc</h1>
        <p className="text-body">
          Join us for exciting events, competitions and gatherings. Whether
          you&apos;ve a budding interest or a deeper passion, discover the world
          of trading with us and make fond memories along the way!
        </p>
        <RedirectButton btnText="See events" destination="/events" />
      </div>
    </section>
  );
};
export default EventSlide;
