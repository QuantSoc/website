import React from 'react';
import './index.scss';
import { Typography, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const ParaStyle = {
  fontSize: '1.7em',
  textAlign: 'left',
  lineHeight: '31px',
  marginBottom: '0px',
};

const ButtonStyle = {
  marginTop: '35px',
  fontSize: '1em',
  height: '67px',
  aspectratio: '1.51',
  background: '#8234DA',
  borderColor: '#8234DA',
  // backgroundColor: '#8234DA',
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
          <Button type="primary" size="large" style={ButtonStyle}>
            GO
            {' '}
            <RightOutlined />
            {' '}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventContent;
