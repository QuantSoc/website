import { HashLink } from 'react-router-hash-link';
import './index.less';

const ResourcesButton = ({
  btnTitle,
  btnText,
  destination,
  Icon,
}) => {
  return (
    <HashLink className="resources-button" to={destination}>
      <Icon className="resources-button-icon" />
      <div className="resources-button-text">
        <div className="resources-button-title">{btnTitle}</div>
        <div className="resources-button-subtext">{btnText}</div>
      </div>
    </HashLink>
  );
};

export default ResourcesButton;
