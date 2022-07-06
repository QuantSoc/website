/* eslint-disable */
import React from "react";
import { Button } from 'antd';

import QuantSocLogo from "./crop_logo_circle.png";

import './index.scss';

const SplashSection = () => {
  return (
    <div className="SplashSection">
      <div className="quantsoc-icon-div">
        <img src={QuantSocLogo} alt="quantsoc logo" style={{ width: '60%'} } align = "left"/>
      </div>
      <div className="quantsoc-info">
        <div className="quantsoc-name">UNSW QUANTSOC</div>
        <div className="quantsoc-description">
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. 
        </div>
        <div className="join-us-div">
          <Button className="join-us-button">JOIN US</Button>
        </div>
      </div>
      
    </div>

    
  );
};

export default SplashSection;
