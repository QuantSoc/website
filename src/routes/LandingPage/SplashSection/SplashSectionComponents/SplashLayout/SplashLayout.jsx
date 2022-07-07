/* eslint-disable */

import React from "react";
import './SplashLayout.scss'

import SplashHeader from "../SplashHeader/SplashHeader";
import SplashBlurb from "../SplashBlurb/SplashBlurb";
import SplashButton from "../SplashButton/SplashButton";

const SplashLayout = () => {
  return (
    <div className="SplashLayout">
      <SplashHeader />
      <SplashBlurb />
      <SplashButton />
    </div>
  );
};

export default SplashLayout;