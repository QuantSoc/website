/* eslint-disable */

import React from "react";
import 'styles/index.scss';

import {
  SplashIcon, SplashLayout
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