import React from 'react';
import '../index.scss';

import Accenture from './SponsorAccentureImage';
import ArcLogo from './SponsorArcImage';
import UNSWBusLogo from './SponsorUNSWBusImage';
import UNSWLogo from './SponsorUNSWImage';

const ImageLayout = () => {
  return (
    <div className="image-layout">
      <Accenture />
      <ArcLogo />
      <UNSWLogo />
      <UNSWBusLogo />
    </div>
  );
};

export default ImageLayout;
