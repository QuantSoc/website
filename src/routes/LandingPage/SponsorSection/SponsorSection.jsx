import React from 'react';
import 'index.scss';

import {
  SponsorHeader, SponsorButton, ImageLayout,
} from './SponsorComponents';

const SponsorSection = () => {
  return (
    <div className="sponsor-section">
      <div className="sponsor-head">
        <SponsorHeader />
        <SponsorButton />
      </div>
      <ImageLayout />
    </div>
  );
};

export default SponsorSection;
