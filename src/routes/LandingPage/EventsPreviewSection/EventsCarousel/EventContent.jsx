import React from 'react';
import './index.scss';
import { Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import LandingButton from 'components/common/LandingButton/LandingButton';

const { Paragraph } = Typography;

const ParaStyle = {
  fontSize: '1.7em',
  textAlign: 'left',
  lineHeight: '31px',
  marginBottom: '0px',
};

const EventContent = ({
  desc, date, time, delivery,
}) => {
  return (
    <div className="carousel-content">
      <div className="event-description">
        <Paragraph style={ParaStyle} ellipsis={{ rows: 6, expandable: false, symbol: 'more' }}>
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
          <LandingButton style={{ marginTop: '35px', height: '67px' }}>
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
