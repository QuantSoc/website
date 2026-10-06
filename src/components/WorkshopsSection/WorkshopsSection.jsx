import { BsGithub } from 'react-icons/bs';
import './index.less';

const WORKSHOP_MATERIALS_URL = 'https://github.com/QuantSoc/workshop-materials';

const WorkshopsSection = ({ className = '', showHeader = true }) => {
  return (
    <section className={`workshops-section ${className}`}>
      {showHeader && <h1 className="workshops-section__header">Workshops</h1>}
      <a
        className="workshops-card"
        href={WORKSHOP_MATERIALS_URL}
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub className="workshops-card__icon" />
        <div className="workshops-card__text">
          <div className="workshops-card__title">Workshop Materials</div>
          <div className="workshops-card__subtext">
            Slides, notebooks and code from our workshops, all on GitHub.
          </div>
        </div>
        <span className="workshops-card__cta">View on GitHub →</span>
      </a>
    </section>
  );
};

export default WorkshopsSection;
