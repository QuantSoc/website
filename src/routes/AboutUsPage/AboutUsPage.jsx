import { useState } from 'react';
import HeroSlide from 'routes/LandingPage/HeroSection/HeroSlide';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal';
import './index.less';
import competitionsBanner from '../../assets/quantsoc-teams/competitions.svg';
import educationBanner from '../../assets/quantsoc-teams/education.svg';
import technicalBanner from '../../assets/quantsoc-teams/technical.svg';
import eventsBanner from '../../assets/quantsoc-teams/events.svg';
import marketingBanner from '../../assets/quantsoc-teams/marketing.svg';
import designBanner from '../../assets/quantsoc-teams/design.svg';
import CultureAndValuesSection from './CultureValuesSection/CultureAndValuesSection';

const portfolios = [
  {
    team: 'competitions',
    src: competitionsBanner,
    desc: 'Our Competitions portfolio work hard to create challenging yet insightful games, brainstorming and executing innovative ideas with other societies and universities.',
  },
  {
    team: 'education',
    src: educationBanner,
    desc: 'Our Education team plans, organises and facilitates quant-related educational workshops, connecting and collaborating with our business sponsors and other societies to create educational events, and develop soft and hard skills with like-minded individuals.',
  },
  {
    team: 'technical',
    src: technicalBanner,
    desc: 'Our Technical team bring digital innovation to our competitions, such as our online Mock Trading Game. They also work hard to create and maintain this website, ensuring seamless transitions and enriching experiences for our quantitative finance community.',
  },
  {
    team: 'events',
    src: eventsBanner,
    desc: 'Our Events team is responsible for planning, organizing, and executing various events, and ensure the smooth operation of workshops, competitions, and non-educational attractions.',
  },
  {
    team: 'marketing',
    src: marketingBanner,
    desc: 'Our Marketing team plays a crucial role in connecting QuantSoc members to our workshops and competitions. They engage members through social media, both on-campus and online, and maximize event attendance.',
  },
  {
    team: 'design',
    src: designBanner,
    desc: 'The Design Team is the creative force behind QuantSoc, responsible for crafting visually engaging materials for our events and activities. They are essential in capturing the attention and imagination of our audience.',
  },
];

const AboutUsPage = () => {
  const { isOpen, toggleModal } = useModal();
  const [teamName, setTeamName] = useState('');
  const [teamImg, setTeamImg] = useState();
  const [teamDesc, setTeamDesc] = useState('');
  return (
    <div>
      <section className="banner">
        <HeroSlide hideRedirect />
      </section>
      <CultureAndValuesSection />
      <section>
        <h2>Our teams</h2>
        <p className="tagline">
          QuantSoc&apos;s teams work hard to create innovative and exciting
          events, games, challenges and opportunities for all to enjoy.
        </p>
        <div className="teams-grid">
          {portfolios.map((pf) => {
            const teamCaps = pf.team.charAt(0).toUpperCase() + pf.team.slice(1);
            return (
              <div
                className="team-container"
                role="button"
                tabIndex={0}
                onKeyDown={() => {
                  toggleModal();
                  setTeamName(teamCaps);
                  setTeamImg(pf.src);
                  setTeamDesc(pf.desc);
                }}
                onClick={() => {
                  toggleModal();
                  setTeamName(teamCaps);
                  setTeamImg(pf.src);
                  setTeamDesc(pf.desc);
                }}
              >
                <img
                  className="team-image"
                  src={pf.src}
                  alt={`quantsoc-${pf.team}-banner`}
                  loading="lazy"
                />
                <div className="team-image-overlay">
                  <p>{pf.team}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          isOpen={isOpen}
          toggleModal={toggleModal}
          header={`${teamName} team`}
        >
          <img
            className="team-modal-image"
            src={teamImg}
            alt={`quantsoc-${teamName}-banner`}
          />
          {/* prettier-ignore */}
          <p>
            Source:
            {' '}
            <a href="https://popsy.co/">
              popsy.co
            </a>
          </p>
          <p>{teamDesc}</p>
        </Modal>
      </section>
    </div>
  );
};
export default AboutUsPage;
