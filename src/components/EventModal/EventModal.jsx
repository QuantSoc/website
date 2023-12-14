import './index.less';
import { useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import EventTag from 'components/EventTag';
import EventDesc from 'components/EventDesc';
import placeholder from '../../assets/quantsoc-teams/events.svg';

const EventModal = ({
  isOpen,
  toggleModal,
  header,
  location,
  sublocation,
  date,
  times,
  cohosts,
  link,
  image,
  tagType,
  children,
}) => {
  if (!isOpen) return null;
  const scrollableDivRef = useRef(null);

  useEffect(() => {
    const target = scrollableDivRef.current;
    const isScrollable = target.scrollHeight > target.clientHeight;
    target.classList.toggle('active', isScrollable);
  }, [isOpen]);

  const handleScroll = () => {
    const target = scrollableDivRef.current;
    const currHeight = target.scrollTop + target.clientHeight;
    const threshold = target.scrollHeight - 3;
    const isAtBottom = currHeight >= threshold;

    target.classList.toggle('active', !isAtBottom);
  };

  return (
    <div className="overlay" onClick={toggleModal} role="presentation">
      <div
        className="modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="presentation"
      >
        <div
          role="button"
          className="close-btn"
          onClick={toggleModal}
          onKeyDown={toggleModal}
          tabIndex={0}
        >
          <IoMdClose />
        </div>
        <EventTag tagType={tagType} />
        <div className="modal-header">{header}</div>
        <EventDesc
          location={location}
          sublocation={sublocation}
          date={date}
          times={times}
          cohosts={cohosts}
          link={link}
        />
        <div
          className="modal-body scroll-indicator"
          ref={scrollableDivRef}
          onScroll={handleScroll}
        >
          <img
            className="event-modal__image"
            src={image !== '' ? image : placeholder}
            alt={header}
            onError={(e) => {
              e.target.src = placeholder;
            }}
          />
          {children}
        </div>
      </div>
    </div>
  );
};
export default EventModal;
