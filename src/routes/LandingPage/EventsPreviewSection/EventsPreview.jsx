import React from 'react';
import './index.scss';

import EventsCarousel from './EventsCarousel';

// This function renders the events section
const EventsPreview = () => {
  return (
    <div className="EventsPreview">
      <h1 className="EventsTitle">BE A PART OF OUR NEXT EVENT!</h1>
      <EventsCarousel />
    </div>
  );
};

export default EventsPreview;
