import './index.less';

const Sponsor = ({ logoSrc, sponsorLink }) => {
  return (
    <div className="sponsor__container">
      <a href={sponsorLink} target="_blank" rel="noreferrer">
        <img src={logoSrc} alt="sponsor" className="sponsor__logo" />
      </a>
    </div>
  );
};
export default Sponsor;
