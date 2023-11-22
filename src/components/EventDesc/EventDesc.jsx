import './index.less';
import { BiCalendarAlt, BiTimeFive, BiMap } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

const EventDesc = ({ location, sublocation, date, times, cohosts }) => {
  const dateStr = new Date(date).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="event-desc__container">
      {location && sublocation && (
        <p className="event-desc location">
          <BiMap className="icon" />
          {`${sublocation}, ${location}`}
        </p>
      )}
      {date && (
        <p className="event-desc date">
          <BiCalendarAlt className="icon" />
          {dateStr}
        </p>
      )}
      {times && (
        <p className="event-desc time">
          <BiTimeFive className="icon" />
          {times}
        </p>
      )}
      {cohosts && (
        <p className="event-desc cohosts">
          <AiOutlineUsergroupAdd className="icon" />
          {`with ${cohosts}`}
        </p>
      )}
    </div>
  );
};
export default EventDesc;
