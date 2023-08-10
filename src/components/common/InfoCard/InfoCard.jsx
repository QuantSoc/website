import React, { useState } from 'react';
import {
  Card, Modal, Button, Typography,
} from 'antd';
import {
  CalendarOutlined, ArrowsAltOutlined,
  FacebookOutlined, FieldTimeOutlined,
  GlobalOutlined, CompassOutlined,
} from '@ant-design/icons';
// Unused (no)
// import {
//   RightOutlined, SettingOutlined,
//   EditOutlined,
// }
import './index.less';

const { Meta } = Card;
const { Text, Title } = Typography;

const CalendarConfirmModal = ({ open, setOpen, title }) => {
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title={`Add ${title} to Calendar?`}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="close" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Confirm
        </Button>,
      ]}
    >
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
      cillum sint consectetur cupidatat.
    </Modal>
  );
};

const InfoCardExpandModal = ({
  open, setOpen, img, title, description, time, location, duration, people,
}) => {
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title={title}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      footer={null}
    >
      <img alt={title} src={img} style={{ maxWidth: 950 }} />
      <Title level={5} type="danger">
        <CalendarOutlined style={{ marginRight: 5 }} />
        {time}
      </Title>
      <Title level={5}>
        <CompassOutlined style={{ marginRight: 5 }} />
        {location}
      </Title>
      <Title level={5}>
        <FieldTimeOutlined style={{ marginRight: 5 }} />
        {`Duration: ${duration}`}
      </Title>
      <Title level={5}>
        <GlobalOutlined style={{ marginRight: 5 }} />
        {people}
      </Title>
      <Title level={5}>
        {description}
      </Title>
    </Modal>
  );
};

const InfoCard = ({
  img, title, description, link, actions, width, time, location, duration, people,
}) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [InfoCardExpand, setInfoCardExpand] = useState(false);

  const openCalendar = () => {
    // works but hidden on dev
    setCalendarOpen(true);
  };

  const expandInfoCard = () => {
    setInfoCardExpand(true);
  };

  return (
    <Card
      className="past-events-card"
      hoverable
      style={{ width: width ?? 300, margin: '20px' }}
      cover={<img alt={title} src={img} style={{ padding: 20 }} />}
      actions={actions || [
        <a href={link} target="_blank" rel="noreferrer">
          <FacebookOutlined key="facebook" />
        </a>, // Facebook
        <CalendarOutlined
          onClick={openCalendar}
        />,
        <ArrowsAltOutlined
          onClick={expandInfoCard}
        />,
      ]}
    >
      <Meta
        className="card-cont"
        title={title}
        description={description}
      />
      {/* <Modal title={title}> */}
      {/*   <img alt={title} src={img} style={{ maxWidth: 460, padding: 20 }} /> */}
      {/*   <p>{description}</p> */}
      {/* </Modal> */}
      <CalendarConfirmModal
        title={title}
        open={calendarOpen}
        setOpen={setCalendarOpen}
      />
      <InfoCardExpandModal
        open={InfoCardExpand}
        setOpen={setInfoCardExpand}
        img={img}
        title={title}
        description={description}
        time={time}
        location={location}
        duration={duration}
        people={people}
      />
    </Card>
  );
};

export default InfoCard;
