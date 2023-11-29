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
        <div className="event-desc location">
          <BiMap className="icon" />
          <p>{`${sublocation}, ${location}`}</p>
        </div>
      )}
      {date && (
        <div className="event-desc date">
          <BiCalendarAlt className="icon" />
          <p>{dateStr}</p>
        </div>
      )}
      {times && (
        <div className="event-desc time">
          <BiTimeFive className="icon" />
          <p>{times}</p>
        </div>
      )}
      {cohosts && (
        <div className="event-desc cohosts">
          <AiOutlineUsergroupAdd className="icon" />
          <p>{`with ${cohosts}`}</p>
        </div>
      )}
    </div>
  );
};
export default EventDesc;
