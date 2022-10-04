import React from 'react';
import { Card } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './index.less';
import LandingButton from '../LandingButton/LandingButton';

const { Meta } = Card;

const PastEventsCard = ({ img, title, description, link }) => {
  return (
    <Card
      className="past-events-card"
      hoverable
      cover={<img alt={title} src={img} />}
    >
      <Meta
        className="card-cont"
        title={title}
        description={description}
      />

      <LandingButton className="read-more-button">
        Read more
        <RightOutlined />
      </LandingButton>

    </Card>
  );
};

export default PastEventsCard;
