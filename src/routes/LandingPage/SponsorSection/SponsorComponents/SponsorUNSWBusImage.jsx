import React from 'react';
import '../index.scss';
import Bus from 'assets/SponsorImages/unsw_business.png';

const UNSWBusLogo = () => {
  return (
    <div>
      <img className="logo" src={Bus} alt="unsw business logo" />
    </div>
  );
};

export default UNSWBusLogo;
