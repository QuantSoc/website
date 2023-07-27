import React from 'react';
import './index.less';

import LandingButton from 'components/common/LandingButton/LandingButton';
import ArcLogo from 'assets/SponsorImages/arc_logo.png';
import UNSWBusinessLogo from 'assets/SponsorImages/unsw_business.png';
import UNSWLogo from 'assets/SponsorImages/unsw.png';
import CitSecLogo from 'assets/SponsorImages/citsec.png';
import SigLogo from 'assets/SponsorImages/sig.png';

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
      <LandingButton className="sponsor-button" href="/sponsors">
        SPONSOR US
      </LandingButton>
    </div>
  );
};

const SponsorImageLayout = () => {
  // TODO: make this a map over an array
  return (
    <div className="sponsor-image-layout">
      <a href="https://www.unsw.edu.au/" target="_blank" rel="noopener noreferrer">
        <SponsorImg imageSrc={UNSWLogo} altText="unsw logo" />
      </a>
      <a href="https://www.citadelsecurities.com/" target="_blank" rel="noopener noreferrer">
        <SponsorImg imageSrc={CitSecLogo} altText="Citadel Securities Logo" />
      </a>
      <a href="https://sig.com/" target="_blank" rel="noopener noreferrer">
        <SponsorImg imageSrc={SigLogo} altText="Sig Logo" />
      </a>
      <a href="https://www.arc.unsw.edu.au/clubs" target="_blank" rel="noopener noreferrer">
        <SponsorImg imageSrc={ArcLogo} altText="Arc Logo" />
      </a>
      <a href="https://www.unsw.edu.au/business" target="_blank" rel="noopener noreferrer">
        <SponsorImg imageSrc={UNSWBusinessLogo} altText="UNSW Business school logo" />
      </a>
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
