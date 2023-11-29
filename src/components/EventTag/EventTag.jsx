import { BiCandles, BiParty, BiBriefcase } from 'react-icons/bi';
import { LiaChalkboardTeacherSolid, LiaHandshake } from 'react-icons/lia';
import './index.less';

const iconMap = {
  trading: <BiCandles className="event-tag__icon" />,
  fun: <BiParty className="event-tag__icon" />,
  career: <BiBriefcase className="event-tag__icon" />,
  workshop: <LiaChalkboardTeacherSolid className="event-tag__icon" />,
  opportunity: <LiaHandshake className="event-tag__icon" />,
};
const tagMap = {
  trading: 'Mock Trading',
  fun: 'Fun & Games',
  career: 'Careers',
  workshop: 'Workshop',
  opportunity: 'Opportunity',
};
const EventTag = ({ tagType }) => {
  return (
    <div className="event-tag">
      {iconMap[tagType]}
      <p className="event-tag__text">{tagMap[tagType]}</p>
    </div>
  );
};
export default EventTag;
