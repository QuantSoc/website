import './index.less';

// Dark header used at the top of the Team and Constitution pages.
// `title` can contain a <span> to highlight a word; anything passed as
// children (stats, buttons, ...) is shown underneath the subtitle.
const PageHero = ({
  eyebrow = 'QuantSoc UNSW',
  title,
  subtitle,
  children,
}) => {
  return (
    <header className="page-hero">
      <div className="page-hero__content">
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </header>
  );
};

export default PageHero;
