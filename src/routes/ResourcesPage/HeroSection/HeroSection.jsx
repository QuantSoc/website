import resourcesGraphic from 'assets/quantsoc-graphics/resources-fireworks.svg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-item">
        <img
          src={resourcesGraphic}
          alt="quantsoc-hero-section-resources-firework-graphic"
          className="hero-img"
        />
      </div>

      <div className="hero-item stack">
        <h1 className="hero-heading">
          Discover fun and educational Resources, Workshops and Opportunities!
        </h1>
        <p className="text-body">
          Explore a fusion of fun and education through curated resources,
          engaging workshops, and exciting opportunities. Immerse yourself in
          the world of quantitative trading, gaining insights, strategies, and
          hands-on experience. Elevate your skills and embrace the journey of
          discovery with us!
        </p>
      </div>
    </section>
  );
};
export default HeroSection;
