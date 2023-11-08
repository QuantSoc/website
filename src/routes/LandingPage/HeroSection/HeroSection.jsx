import Carousel from 'components/Carousel/Carousel';
import HeroSlide from './HeroSlide';
import EventSlide from './EventSlide';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Carousel
        hideArrows
        slides={[
          {
            id: 'hero-slide',
            slide: <HeroSlide />,
          },
          {
            id: 'event-slide',
            slide: <EventSlide />,
          },
        ]}
      />
    </section>
  );
};
export default HeroSection;
