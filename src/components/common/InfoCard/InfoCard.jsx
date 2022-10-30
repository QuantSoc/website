import React, { useState } from 'react';
import { Card, Modal, Button } from 'antd';
import {
  CalendarOutlined, ArrowsAltOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
// Unused (no)
// import {
//   RightOutlined, SettingOutlined,
//   EditOutlined,
// }
import './index.less';

const { Meta } = Card;

const CalendarConfirmModal = ({ open, setOpen }) => {
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title="Add Example Event to Calender"
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

const InfoCardExpandModal = ({ open, setOpen, img }) => {
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title="Example Event"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      footer={null}
    >
      <img alt="Example Event" src={img} />
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
      cillum sint consectetur cupidatat.
    </Modal>
  );
};

const InfoCard = ({
  img, title, description, actions, width,
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
        <a href="https://www.facebook.com/unswquantsoc" target="_blank" rel="noreferrer">
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
        open={calendarOpen}
        setOpen={setCalendarOpen}
      />
      <InfoCardExpandModal
        open={InfoCardExpand}
        setOpen={setInfoCardExpand}
        img={img}
      />
    </Card>
  );
};

export default InfoCard;
