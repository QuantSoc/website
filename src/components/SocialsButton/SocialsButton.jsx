import './index.less';

const SocialsButton = ({ btnText, socialsLink, IconComponent }) => {
  return (
    <button
      className="socials-button-container"
      type="button"
      onClick={() => {
        window.open(socialsLink, '_blank').focus();
      }}
    >
      <IconComponent className="socials-button-icon" />
      <div className="socials-button-text">{btnText}</div>
    </button>
  );
};

export default SocialsButton;
