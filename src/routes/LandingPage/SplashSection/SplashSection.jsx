/* eslint-disable */

import React from "react";
import 'index.scss';

import {
  SplashIcon, SplashHeader, SplashBlurb, SplashLayout
} from './SplashSectionComponents';

const SplashSection = () => {
  return (
    <div className="SplashSection">
      <SplashIcon />
      <SplashLayout />
    </div>
  );
};

export default SplashSection;