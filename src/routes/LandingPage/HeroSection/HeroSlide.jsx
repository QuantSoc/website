import RedirectButton from 'components/RedirectButton/RedirectButton';
import heroCandlestick from 'assets/quantsoc-graphics/hero-candlestick.svg';
import './index.less';

const HeroSlide = ({ hideRedirect = false }) => {
  return (
      <div className="empowering-section">
        <h1>We are UNSW's <span className='highlight-text'>largest</span> community for quantitative trading</h1>
        {!hideRedirect && (
          <RedirectButton btnText="Join Us" destination="https://docs.google.com/forms/d/1yJJ246LoUPVC7zFwXpb99qWz9a5DMm7G5JiucbJQXLY/" />
        )}
      </div>
  );
};
export default HeroSlide;
