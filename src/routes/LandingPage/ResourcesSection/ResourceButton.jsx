import { HashLink } from 'react-router-hash-link';
import './index.less';

const ResourcesButton = ({
  btnTitle,
  btnText,
  destination,
  Icon,
}) => {
  return (
    <HashLink smooth to={destination}>
      <div
        className="resources-button"
      >
        <Icon className="resources-button-icon" />
        <div className="resources-button-text">
          <div className="resources-button-title">{btnTitle}</div>
          <div className="resources-button-subtext">{btnText}</div>
        </div>
      </div>
    </HashLink>
  );
};

export default ResourcesButton;
