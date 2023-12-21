import './index.less';
import RedirectButton from 'components/RedirectButton';

const ResourceOutline = ({
  anchorTag,
  outlineTitle,
  index,
  imgSrc,
  redirectLink,
  redirectBtnText,
  children,
}) => {
  return (
    <section
      id={anchorTag}
      className={`resource-outline__container ${index % 2 === 0 && 'bg-dark'}`}
    >
      <div className="resource-outline__main-container">
        <h2>{outlineTitle}</h2>
        <div className="resource-outline__description">{children}</div>
        <RedirectButton btnText={redirectBtnText} destination={redirectLink} />
      </div>
      <div className="resource-outline__img-container">
        <img src={imgSrc} alt={`${outlineTitle}`} />
      </div>
    </section>
  );
};
export default ResourceOutline;
