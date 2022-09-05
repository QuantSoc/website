/* eslint-disable */

import React from "react";
import 'styles/index.scss';

import QuantSocLogo from 'assets/crop_logo_circle.png';
import mobileQuantSocLogo from 'assets/logo_circle.png'

import SplashHeader from "./SplashSectionComponents/SplashHeader";
import SplashBlurb from "./SplashSectionComponents/SplashBlurb";
import SplashButton from "./SplashSectionComponents/SplashButton";


const SplashSection = () => {
  return (
    <div className="splash-section">
      <SplashIcon />
      <SplashLayout />
    </div>
  );
};

const SplashLayout = () => {
  return (
    <div className="splash-layout">
      <SplashHeader />
      <SplashBlurb />
      <SplashButton />
    </div>
  );
};


const SplashIcon = () => {
  return (
    <picture className="splash-icon">
      <source srcset={mobileQuantSocLogo} media="(max-width: 700px)" />
      <img className="icon" src={QuantSocLogo} alt="quantsoc logo" />
    </picture>
  );
};


export default SplashSection;
