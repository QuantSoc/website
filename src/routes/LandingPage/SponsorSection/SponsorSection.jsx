import React from 'react';
import './index.scss';

import AccentureLogo from '../../../assets/SponsorImages/accenture_logo.png';
import ArcLogo from '../../../assets/SponsorImages/arc_logo.png';
import UNSWBusinessLogo from '../../../assets/SponsorImages/unsw_business.png';
import UNSWLogo from '../../../assets/SponsorImages/unsw.png';

const SponsorSection = () => {
  return (
    <div className="sponsor-section">
      <div className="sponsor-head">
        <div className="sponsor-header">OUR SPONSORS</div>
        <SponsorButton />
      </div>
      <SponsorImageLayout />
    </div>
  );
};

const SponsorButton = () => {
  return (
    <div className="sponsor-button-cont">
      <button type="button" className="sponsor-button">
        SPONSOR US
      </button>
    </div>
  );
};

const SponsorImageLayout = () => {
  // TODO: make this a map over an array
  return (
    <div className="sponsor-image-layout">
      <SponsorImg imageSrc={UNSWLogo} altText="unsw logo" />
      <SponsorImg imageSrc={AccentureLogo} altText="Accenture Logo" />
      <SponsorImg imageSrc={ArcLogo} altText="Arc Logo" />
      <SponsorImg imageSrc={UNSWBusinessLogo} altText="UNSW Business school logo" />
      <SponsorImg imageSrc={UNSWLogo} altText="unsw logo" />
    </div>
  );
};

const SponsorImg = ({ imageSrc, altText }) => {
  return (
    <div className="sponsor-image-cont">
      <img
        className="sponsor-image"
        src={imageSrc}
        alt={altText}
      />
    </div>
  );
};

export default SponsorSection;
