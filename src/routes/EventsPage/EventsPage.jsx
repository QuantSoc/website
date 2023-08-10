import React from 'react';
import InfoCard from 'components/common/InfoCard';

/* import logo from 'assets/logo_circle.png'; */
import logo from 'assets/SponsorImages/citsec.png';
import banner from 'assets/banner_revisionseminar_13.8.23.png';
// import banner from 'assets/SponsorImages/unsw.png';

const EventsPage = () => {
  return (
    <div>
      <InfoCard
        title="MathSoc x QuantSoc's 3311 Revision Seminar"
        description="Fourier series got you feeling frightened? PDE's causing panic?
                     Struggle no more, as the MATH3311 revision seminar is here to help!"
        link="https://fb.me/e/1hEXVg8M5"
        img={banner}
        time="SUNDAY 13 AUGUST 2023 FROM 12:00-14:00"
        location="YouTube Livestream"
        duration="2 hr"
        people="Students Only"
      />
      <InfoCard
        title="Quantitative Society"
        description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        link="https://www.facebook.com/QuantSoc/"
        img={logo}
        time="THURSDAY, 17 NOVEMBER 2022 FROM 16:00-19:00"
        location="Colombo Theatres"
        duration="3 hr"
        people="Public"
      />
    </div>
  );
};

export default EventsPage;
