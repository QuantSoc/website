import './index.less';
import { BiExpandVertical } from 'react-icons/bi';
import { RiExternalLinkFill } from "react-icons/ri";


const ArticlesCard = ({ heading, date, link }) => {
  return (
    <a className="article-card__container" href={link} >
      <span>
        <span className="article-card__heading">{heading}</span>
        <h6>{date}</h6>
      </span> 
      <span className='article-card-extern-link'><RiExternalLinkFill /></span>
    </a>
  );
};

export default ArticlesCard;
