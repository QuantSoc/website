import React from 'react';
import './index.less';
import { Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import LandingButton from 'components/common/LandingButton/LandingButton';
import useMediaQuery from 'hooks/useMediaQuery';

const { Paragraph } = Typography;

const EventContent = ({
  desc, date, time, delivery,
}) => {
  const isDesktop = useMediaQuery('(min-width: 860px)');

  const ParaStyleDesktop = {
    fontSize: '1.7em',
    textAlign: 'left',
    lineHeight: '31px',
    marginBottom: '0px',
  };

  const ParaStyleMobile = {
    fontSize: '1.4em',
    textAlign: 'left',
    lineHeight: '31px',
    marginBottom: '0px',
  };

  const btnDesktop = {
    marginTop: '35px',
    height: '67px',
  };

  const btnMobile = {
    marginTop: '25px',
    height: '50px',
  };

  return (
    <div className="carousel-content">
      <div className="event-description">
        <Paragraph style={isDesktop ? ParaStyleDesktop : ParaStyleMobile} ellipsis={{ rows: 6, expandable: false, symbol: 'more' }}>
          {desc}
        </Paragraph>
        <div className="events-info">
          <div className="divider" />
          {`⭐ ${date}`}
          {' '}
          <br />
          {`⏰ ${time}`}
          {' '}
          <br />
          {`💻 ${delivery}`}
          {' '}
          <br />
          {/* uhhh... button does nothing... will change soon */}
          <LandingButton style={isDesktop ? btnDesktop : btnMobile}>
            GO
            {' '}
            <RightOutlined />
            {' '}
          </LandingButton>
        </div>
      </div>
    </div>
  );
};

export default EventContent;
