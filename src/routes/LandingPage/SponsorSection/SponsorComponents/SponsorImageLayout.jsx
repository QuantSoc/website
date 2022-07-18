/* eslint-disable */
import React from 'react';

import AccentureLogo from '../../../../assets/SponsorImages/accenture_logo.png';
import ArcLogo from '../../../../assets/SponsorImages/arc_logo.png';
import UNSWBusinessLogo from '../../../../assets/SponsorImages/unsw_business.png';
import UNSWLogo from '../../../../assets/SponsorImages/unsw.png';

const SponsorImageLayout = () => {
  return (
    <div className="sponsor-image-layout">
      <SponsorImg imageSrc={UNSWLogo} altText={"unsw logo"} />
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
}


//
// const SponsorImage = ({ imageSource, imageAlt }) => {
//   return (
//     <div className="sponsor-logo">
//       dsafa 
//       {/* <img */}
//       {/*   className="sponsor-logo-img" */}
//       {/*   src={imageSource} */}
//       {/*   alt={imageAlt} */}
//       {/* /> */}
//     </div>
//   );
// };

export default SponsorImageLayout;
