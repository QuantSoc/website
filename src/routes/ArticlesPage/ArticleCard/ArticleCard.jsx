import './index.less';
import { BiExpandVertical } from 'react-icons/bi';
import { RiExternalLinkFill } from "react-icons/ri";


const ArticlesCard = ({ heading, date, link }) => {
  return (
    <a className="article-card__container" href={link} >
      <span>
        <h3 className="article-card__heading">{heading}</h3>
        <h5 className='article-card__date'>{date}</h5>
      </span> 
      <span className='article-card-extern-link'><RiExternalLinkFill /></span>
    </a>
  );
};

export default ArticlesCard;
