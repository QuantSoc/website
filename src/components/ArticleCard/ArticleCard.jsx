import './index.less';
import { BiExpandVertical } from 'react-icons/bi';

const ArticlesCard = ({ heading, date, link }) => {
  return (
    <div className="article-card__container">
      <h4 className="article-card__heading">{heading}</h4>
      <h6>{date}</h6>
      <a href={link} style={{ textDecoration: 'none'}}>
        <div className="event-card__button">
          <BiExpandVertical />
          <button type="button">Read More</button>
        </div>
      </a>
    </div>
  );
};

export default ArticlesCard;
