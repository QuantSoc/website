import React from 'react';
import '../index.scss';
import unsw from 'assets/SponsorImages/unsw.png';

const UNSWLogo = () => {
  return (
    <div>
      <img className="logo" src={unsw} alt="unsw logo" />
    </div>
  );
};

export default UNSWLogo;
