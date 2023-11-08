import './index.less';

const SocialsButton = ({ btnText, sociallink, IconComponent, iconStyle }) => {
    const navigateToLink = () => {
      window.open(sociallink, '_blank');
    };
  
    return (
      <button className="socials-button-container" type="button" onClick={navigateToLink}>
        <IconComponent style={iconStyle} className="socials-button-icon"/>
        <div className="socials-button-text">{btnText}</div>
      </button>
    );
  };
  

export default SocialsButton;
  
  