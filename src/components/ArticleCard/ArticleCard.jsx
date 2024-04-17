import './index.less';


const ArticlesCard = ({
    heading,
    subheading,
}) => {
    // TODO: add more elements to the articles card
    return (
      <div className="article-card__container">
        <h4 className="article-card__heading">{heading}</h4>
        <h5 className="article-card__subheading">{subheading}</h5>
      </div>
    );
  };
  export default ArticlesCard;
  
