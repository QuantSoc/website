import React from 'react';
import PastEventsCard from 'components/common/PastEventsCard';

/* import logo from 'assets/logo_circle.png'; */
import logo from 'assets/SponsorImages/citsec.png';


const EventsPage = () => {
  return (
    <div>
      <PastEventsCard
        title="Quantitative Society"
        description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        link="https://www.facebook.com/QuantSoc/"
        img={logo}
      />
    </div>
  );
};

export default EventsPage;
