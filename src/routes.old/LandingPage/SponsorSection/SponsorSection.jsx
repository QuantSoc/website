import React from 'react';
import './index.less';

import LandingButton from 'components.old/common/LandingButton/LandingButton';
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
      <SponsorImg imageSrc={UNSWLogo} altText="unsw logo" />
      <SponsorImg imageSrc={CitSecLogo} altText="Citadel Securities Logo" />
      <SponsorImg imageSrc={SigLogo} altText="Sig Logo" />
      <SponsorImg imageSrc={ArcLogo} altText="Arc Logo" />
      <SponsorImg
        imageSrc={UNSWBusinessLogo}
        altText="UNSW Business school logo"
      />
      <SponsorImg imageSrc={UNSWLogo} altText="unsw logo" />
    </div>
  );
};

const SponsorImg = ({ imageSrc, altText }) => {
  return (
    <div className="sponsor-image-cont">
      <img className="sponsor-image" src={imageSrc} alt={altText} />
    </div>
  );
};

export default SponsorSection;
