import React from 'react';

import AccentureLogo from '/assets/SponsorImages/accenture_logo.png';
import ArcLogo from '/assets/SponsorImages/SponsorArcImage.png';
import UNSWBusinessLogo from '/assets/SponsorImages/unsw_business.png';
import UNSWLogo from '/assets/SponsorImages/SponsorUNSWImage.png';

const ImageLayout = () => {
  return (
    <div className="sponsor-image-layout">
      <SponsorImage imageSource={AccentureLogo} imageAlt="Accenture Logo" />
      <SponsorImage imageSource={ArcLogo} imageAlt="Arc Logo" />
      <SponsorImage imageSource={UNSWBusinessLogo} imageAlt="UNSW Business school logo" />
      <SponsorImage imageSource={UNSWLogo} imageAlt="unsw logo" />
    </div>
  );
};

const SponsorImage = ({ imageSource, imageAlt }) => {
  return (
    <div className="sponsor-image">
      <img src={imageSource} alt={imageAlt} />
    </div>
  );
};

export default ImageLayout;
