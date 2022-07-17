import React from 'react';
import image from 'assets/comingsoon.png';
import ResourceButton from './ResourceButton';

const ResourceBlock = ({ name }) => {
  return (
    <div className="ResourceBlock">
      <img className="image" src={image} alt="coming soon" />
      <br />
      <ResourceButton name={name} />
    </div>
  );
};

export default ResourceBlock;
