import './index.less'

const HeroSection = ({ className = '' }) => {
  return (
    <section className={`hero-section ${className}`} id='resource-hero-section'>
      <div className="hero-text-container">
        <h1 className="hero-heading">
          Discover Our Resources!
        </h1>
        <p className="text-body">
         Use our interactive apps, opportunities board and more to immerse yourself in the world of quantitative trading...
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
