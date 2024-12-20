import RedirectButton from 'components/RedirectButton/RedirectButton';
import heroCandlestick from 'assets/quantsoc-graphics/hero-candlestick.svg';
import './index.less';

const HeroSlide = ({ hideRedirect = false }) => {
  return (
    <div className="hero-slide">
      <div className="hero-item">
        <img
          src={heroCandlestick}
          alt="quantsoc-hero-section-candlestick-graphic"
          className="hero-img"
        />
      </div>
      <div className="hero-item stack">
        <h1>Empowering Quantitative Futures at UNSW</h1>
        <p className="text-body">
          We are UNSW's largest and fastest growing student community for 
          quantitative trading. Our aim is to connect students with 
          opportunities in mathematical finance, quantitative trading and 
          algorithmic market-making.
        </p>
        {!hideRedirect && (
          <RedirectButton btnText="Join Us" destination="https://docs.google.com/forms/d/1yJJ246LoUPVC7zFwXpb99qWz9a5DMm7G5JiucbJQXLY/" />
        )}
      </div>
    </div>
  );
};
export default HeroSlide;
