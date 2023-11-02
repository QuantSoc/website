import HeroSlide from 'routes/LandingPage/HeroSection/HeroSlide';
import './index.less';

const portfolios = [
  { team: 'competitions', src: 'https://unsplash.it/500/250' },
  { team: 'education', src: 'https://unsplash.it/500/250' },
  { team: 'events', src: 'https://unsplash.it/500/250' },
  { team: 'technical', src: 'https://unsplash.it/500/250' },
  { team: 'design', src: 'https://unsplash.it/500/250' },
  { team: 'marketing', src: 'https://unsplash.it/500/250' },
];

const AboutUsPage = () => {
  return (
    <div>
      <HeroSlide />
      <section>
        <h2>Our teams</h2>
        <p className="tagline">
          QuantSoc&apos;s teams work hard to create innovative and exciting
          events, games, challenges and opportunities for all to enjoy.
        </p>
        <div className="teams-grid">
          {portfolios.map((pf) => {
            return (
              <div className="team-container">
                <img
                  className="team-image"
                  src="https://unsplash.it/500/250"
                  alt={`quantsoc-${pf.team}-banner`}
                />
                <div className="team-image-overlay">
                  <p>{pf.team.charAt(0).toUpperCase() + pf.team.slice(1)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default AboutUsPage;
