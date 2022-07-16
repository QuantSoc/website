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

const EventContent = () => {
  const DummyDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const DummyDate = '1st Jan - 2nd Jan';
  const DummyTime = '4:00pm - 5:00pm';
  const DummyDeli = 'Online';

  return (
    <div className="carousel-content">
      <div className="event-description">
        <Paragraph style={ParaStyle} ellipsis={{ rows: 6, expandable: false, symbol: 'more' }}>
          {DummyDesc}
        </Paragraph>
        <div className="events-info">
          <div className="divider" />
          {`⭐ ${DummyDate}`}
          {' '}
          <br />
          {`⏰ ${DummyTime}`}
          {' '}
          <br />
          {`💻 ${DummyDeli}`}
          {' '}
          <br />
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
