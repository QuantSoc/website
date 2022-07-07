import React from 'react';
import './SplashIcon.scss';
import QuantSocLogo from 'assets/crop_logo_circle.png';

const SplashIcon = () => {
  return (
    <div>
      <img className="icon" src={QuantSocLogo} alt="quantsoc logo" />
    </div>
  );
};

export default SplashIcon;
