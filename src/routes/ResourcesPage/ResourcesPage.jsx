import { React, useRef, useEffect } from 'react';
import './index.less';
import InfoCard from 'components/common/InfoCard';

import { Typography } from 'antd';

import logo from 'assets/SponsorImages/citsec.png';

const { Text, Title } = Typography;

const ResourcesPage = () => {
  return (
    <div>
      <div>
        <Title className="resources-page-title">
          Workshops
        </Title>
        <div className="card-container">
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
      </div>
      <div>
        <Title className="resources-page-title">
          Opportunities
        </Title>
        <div className="card-container">
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
      </div>
      <div>
        <Title className="resources-page-title">
          Other
        </Title>
        <div className="card-container">
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
      </div>
    </div>
  );
};

export default ResourcesPage;
