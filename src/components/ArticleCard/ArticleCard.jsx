import './index.less';


const ArticlesCard = ({
    heading,
    subheading,
    author,
    date,
    sampletext,
    link,
}) => {
    // TODO: add more elements to the articles card
    const handleClick = () => {
      window.location.href = link;
    };

    return (
      <div className="article-card__container">
        <h4 className="article-card__heading">{heading}</h4>
        <h6>{date}</h6>
        <button className='article-card__read-button' onClick={handleClick}>
          READ MORE &gt;
        </button>      
        </div>
    );
  };
  export default ArticlesCard;
  
