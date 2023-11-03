import './index.less';
import { IoMdClose } from 'react-icons/io';

const Modal = ({ isOpen, toggleModal, header, children }) => {
  if (!isOpen) return null;
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
        <div className="modal-header">{header}</div>
        <div className="modal-description" />
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
export default Modal;

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
