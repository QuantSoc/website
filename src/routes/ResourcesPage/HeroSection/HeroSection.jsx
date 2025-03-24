import './index.less'

const HeroSection = ({ className = '' }) => {
  return (
    <section className={`hero-section ${className}`} id='resource-hero-section'>
      <div className="hero-text-container">
        <h1 className="hero-heading">
          Discover fun and educational Resources, Workshops and Opportunities!
        </h1>
        <p className="text-body">
          Explore a fusion of fun and education through our curated resources. Immerse yourself in
          the world of quantitative trading, gaining insights, strategies, and
          hands-on experience!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
