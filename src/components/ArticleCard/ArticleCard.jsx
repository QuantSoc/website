import './index.less';

const ArticlesCard = ({
    heading,
    date,
    link,
}) => {    
    return (
      <div className="article-card__container">
        <h4 className="article-card__heading">{heading}</h4>
        <h6>{date}</h6>
        <a href={link}><button className='article-card__read-button'>
          READ MORE &gt;
        </button></a>
        </div>
    );
  };
  export default ArticlesCard;
  
