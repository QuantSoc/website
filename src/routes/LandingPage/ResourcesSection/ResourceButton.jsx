import { HashLink } from 'react-router-hash-link';
import './index.less';

const ResourcesButton = ({ btnTitle, btnText, destination, Icon }) => {
  return (
    <HashLink smooth to={destination}>
      <button
        className="resources-button-container"
        type="button"
      >
        <Icon className="resources-button-icon" />
        <div className="resources-button-title">{btnTitle}</div>
        <div className="resources-button-text">{btnText}</div>
      </button>
    </HashLink>
  );
};

export default ResourcesButton;
