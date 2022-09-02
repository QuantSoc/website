/* eslint-disable */

import React from 'react';
import '../index.scss'
import QuantSocLogo from 'assets/crop_logo_circle.png';
import mobileQuantSocLogo from 'assets/logo_circle.png'

const SplashIcon = () => {
  return (
    <picture className="splash-icon">
      <source srcset={mobileQuantSocLogo} media="(max-width: 700px)" />
      <img className="icon" src={QuantSocLogo} alt="quantsoc logo" />
    </picture>
  );
};

export default SplashIcon;
