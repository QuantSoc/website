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

  const daysLeft = (new Date(date) - new Date()) / (1000 * 3600 * 24);

  return (
    <div className="event-desc__container">
      <div className="event-desc location">
        <BiMap className="icon" />
        <p>{`${sublocation && `${sublocation}, `} ${location}`}</p>
      </div>
      <div
        className={`event-desc date ${
          daysLeft > 0 && daysLeft <= 3 && 'urgent'
        }`}
      >
        <BiCalendarAlt className="icon" />
        <p>{date ? dateStr : 'N/A'}</p>
      </div>
      <div className="event-desc time">
        <BiTimeFive className="icon" />
        <p>{!times ? 'N/A' : times}</p>
      </div>
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
