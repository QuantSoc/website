import { BiExpandVertical } from 'react-icons/bi';
import './index.less';
import EventTag from 'components/EventTag';
import EventDesc from 'components/EventDesc';
import placeholder from '../../assets/quantsoc-teams/events.svg';

// TODO - add location link redirect to Google Maps, requires additional prop
const EventCard = ({
  toggleModal,
  index,
  setEventIndex,
  header,
  location,
  sublocation,
  date,
  times,
  cohosts,
  image,
  tagType,
}) => {
  const handleImageError = (event) => {
    event.target.src = placeholder;
  };
  return (
    <div className="event-card__container">
      <EventTag tagType={tagType} />
      <h4 className="event-card__header">{header}</h4>
      <EventDesc
        location={location}
        sublocation={sublocation}
        date={date}
        times={times}
        cohosts={cohosts}
        isSmall
      />
      <img
        className="event-card__image"
        src={image !== '' ? image : placeholder}
        alt={header}
        onError={handleImageError}
      />
      <div className="event-card__button">
        <BiExpandVertical />
        <button
          type="button"
          onClick={() => {
            toggleModal();
            setEventIndex(index);
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};
export default EventCard;
