/* eslint-disable */

import React from "react";
import '../index.scss';

import SplashHeader from "./SplashHeader";
import SplashBlurb from "./SplashBlurb";
import SplashButton from "./SplashButton";

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