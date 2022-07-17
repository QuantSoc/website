import React from 'react';
import './index.scss';

import {
  SponsorHeader, SponsorButton, SponsorImageLayout,
} from './SponsorComponents';

const SponsorSection = () => {
  return (
    <div className="sponsor-section">
      <div className="sponsor-head">
        <SponsorHeader />
        <SponsorButton />
      </div>
      <SponsorImageLayout />
    </div>
  );
};

export default SponsorSection;
