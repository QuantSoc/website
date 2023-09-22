import RedirectButton from 'components/RedirectButton/RedirectButton';
import heroCandlestick from '../../../assets/hero-candlestick.svg';
import './index.less';

const HeroSlide = () => {
  return (
    <section className="hero-section">
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
          We are UNSW&apos;s largest and fastest growing student community for
          quantitative trading. We aim to help connect and empower students in
          shaping the future of quant trading.
        </p>
        <RedirectButton btnText="Read more" destination="/about" />
      </div>
    </section>
  );
};
export default HeroSlide;