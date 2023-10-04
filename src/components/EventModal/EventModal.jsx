import './index.less';
import { IoMdClose } from 'react-icons/io';

const EventModal = ({
  isOpen,
  toggleModal,
  header,
  location,
  sublocation,
  date,
  times,
  cohosts,
  tagIcon,
  tagText,
  children,
}) => {
  if (!isOpen) return null;
  const dateStr = new Date(date).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
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
        <div className="tag">
          <div className="tag-icon">{tagIcon}</div>
          <div className="tag-text">{tagText}</div>
        </div>
        <div className="modal-header">{header}</div>
        <div className="modal-description">
          <div className="modal-location">{`${location}, ${sublocation}`}</div>
          <div className="modal-datetime">{`${dateStr}, ${times}`}</div>
          <div className="modal-cohosts">{`with ${cohosts}`}</div>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
export default EventModal;

/*
import useModal from 'hooks/useModal';
import EventModal from 'components/EventModal';
...

  const { isOpen, toggleModal } = useModal();
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          toggleModal();
        }}
      >
        Click me
      </button>
      <EventModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        header="QuantSoc x Pisoc Options Trading Workshop"
        location="UNSW"
        sublocation="Mathews 104"
        date={new Date().toISOString()}
        times="5:00pm - 7:00pm"
        cohosts="Pisoc"
        tagIcon={IoMdClose size={30} />}
        tagText="Workshop"
      >
        <p>
          Are YOU a student interested in what options trading is? Do YOU want
          to know how to make money with your skills? Quantsoc is partnering up
          with the Personal Investment Society to bring you our Options Trading
          Workshop!
        </p>
        <p>
          Come bring yourself and all your friends to QuantSoc x Pisoc&apos;s
          Options Trading workshop on Wednesday, 14th of June 5:00pm to 7:00pm
          at Mathews 104! This workshop is open to people with ALL levels of
          knowledge.
        </p>
      </EventModal>
    </>
  );
*/
