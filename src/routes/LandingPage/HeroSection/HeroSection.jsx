import Carousel from 'components/Carousel/Carousel';
import HeroSlide from './HeroSlide';
import EventSlide from './EventSlide';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel
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
    </div>
  );
};
export default HeroSection;
