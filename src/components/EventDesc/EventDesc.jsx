import './index.less';
import { BiCalendarAlt, BiTimeFive, BiMap } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FiLink } from 'react-icons/fi';

const intuitiveDates = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const startMonth = start.toLocaleString('default', { month: 'short' });
  const endMonth = end.toLocaleString('default', { month: 'short' });
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  const startDay = start.getDate();
  const endDay = end.getDate();
  const dateStr = new Date(startDate).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  if (startDate && !endDate) return dateStr;
  if (!startDate && !endDate) return 'N/A';
  if (startDay === endDay && startMonth === endMonth && startYear === endYear) {
    return dateStr;
  }
  if (startMonth === endMonth && startYear === endYear) {
    return `${startDay} - ${endDay}, ${startMonth} ${startYear}`;
  }
  if (startMonth !== endMonth && startYear === endYear) {
    return `${startDay} ${startMonth} - ${endDay} ${endMonth}, ${startYear}`;
  }
  return `${startDay} ${startMonth} ${startYear} - ${endDay} ${endMonth} ${endYear}`;
};

const EventDesc = ({
  location,
  sublocation,
  startDate,
  endDate,
  times,
  cohosts,
  link,
}) => {
  const dateStr = intuitiveDates(startDate, endDate);
  const daysLeft = (new Date(endDate) - new Date()) / (1000 * 3600 * 24);

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
        <p>{dateStr}</p>
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
      {link && (
        <div className="event-desc link">
          <FiLink className="icon" />
          <a href={link} target="_blank" rel="noreferrer">
            {new URL(link).hostname.replace('www.', '')}
          </a>
        </div>
      )}
    </div>
  );
};
export default EventDesc;
