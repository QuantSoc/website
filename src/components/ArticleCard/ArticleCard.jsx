import './index.less';


const ArticlesCard = ({
    heading,
    subheading,
    author,
    date,
    sampletext,
}) => {
    // TODO: add more elements to the articles card
    return (
      <div className="article-card__container">
        <h4 className="article-card__heading">{heading}</h4>
        <h5 className="article-card__subheading">{subheading}</h5>
        <h6 className='article-card__author'>Written by {author}, {date}</h6>
        <div className='article-card__sample'>{sampletext.substring(0,160)}...</div>
        <button className='article-card__read-button'>READ MORE &gt;</button>
      </div>
    );
  };
  export default ArticlesCard;
  
