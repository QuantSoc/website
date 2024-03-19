import './index.less';
// import { useEffect, useState } from 'react';
import useModal from 'hooks/useModal';

import EventCard from 'components/EventCard';
import EventModal from 'components/EventModal';

const EventsPreview = ({ formData }) => {
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <EventCard
        key={`${formData.header}-${1}`}
        toggleModal={toggleModal}
        // index={j}
        setEventIndex={() => {}}
        header={formData.header}
        location={formData.location}
        sublocation={formData.sublocation}
        startDate={formData.startDate}
        endDate={formData.endDate}
        times={formData.times}
        image={formData.image}
        link={formData.link}
        tagType={formData.tagType}
      />
      <EventModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        header={formData.header}
        location={formData.location}
        sublocation={formData.sublocation}
        startDate={formData.startDate}
        endDate={formData.endDate}
        tagType={formData.tagType}
        image={formData.image}
        times={formData.times}
        cohosts={formData.cohosts}
        link={formData.link}
        tagIcon={formData.tagIcon}
      >
        {formData.body.split('\n').map((paragraph) => {
          return (
            <p key={`event-modal-body-${paragraph.slice(0, 10)}`}>
              {paragraph}
            </p>
          );
        })}
      </EventModal>
    </>
  );
};
export default EventsPreview;
