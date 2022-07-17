/* eslint-disable */

import React from "react";
import 'index.scss';

import {
  SplashIcon, SplashHeader, SplashBlurb, SplashLayout
} from './SplashSectionComponents';

const SplashSection = () => {
  return (
    <div className="splash-section">
      <SplashIcon />
      <SplashLayout />
    </div>
  );
};

export default SplashSection;