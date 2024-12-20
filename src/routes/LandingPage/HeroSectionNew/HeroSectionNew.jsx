import './index.less';
import { useEffect, useRef } from 'react';

import candleStickGraphic from '../../../assets/quantsoc-graphics/candlestick-graphic.svg';

const HeroSectionNew = () => {
  return (
    <div className="candlestick-container">
      <div className="candlestick-scroller">
        <img src={candleStickGraphic} alt="Candlestick Graphic" />
      </div>
    </div>
  );
};

export default HeroSectionNew;
