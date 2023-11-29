import './index.less';
import RedirectButton from 'components/RedirectButton';

const ResourceOutline = ({
  outlineTitle,
  index,
  imgSrc,
  redirectLink,
  redirectBtnText,
}) => {
  return (
    <section
      className={`resource-outline__container ${index % 2 === 0 && 'bg-dark'}`}
    >
      <div className="resource-outline__main-container">
        <h2>{outlineTitle}</h2>
        <div className="resource-outline__description">
          <p>
            Dive into the fast-paced world of trading, hone your investment
            strategies, and compete with fellow traders in a mock environment.
            Create your own markets and play amongst your friends.
          </p>
          <br />
          <p>
            Learn, compete and have fun in QuantSoc&apos;s Mock Trading Game!
          </p>
        </div>
        <RedirectButton btnText={redirectBtnText} destination={redirectLink} />
      </div>
      <div className="resource-outline__img-container">
        <img src={imgSrc} alt={`${outlineTitle}`} />
      </div>
    </section>
  );
};
export default ResourceOutline;
