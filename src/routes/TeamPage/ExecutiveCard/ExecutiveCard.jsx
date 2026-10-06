import { BsLinkedin } from 'react-icons/bs';
import './index.less';

const ExecutiveCard = ({
  name,
  role,
  linkedin,
  compact = false,
}) => {
  return (
    <div className={`executive-card${compact ? ' executive-card--compact' : ''}`}>
      <div className="executive-card__text">
        <p className="executive-card__name">{name}</p>
        <p className="executive-card__role">{role}</p>
      </div>
      {linkedin && (
        <a
          className="executive-card__linkedin"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} on LinkedIn`}
        >
          <BsLinkedin />
        </a>
      )}
    </div>
  );
};

export default ExecutiveCard;
