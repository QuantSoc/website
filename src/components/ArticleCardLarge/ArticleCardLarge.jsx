import './index.less';

import comingSoonImg from '../../assets/comingsoon.png'

const ArticleCardLarge = ({
    heading,
    subheading,
}) => {
    // TODO: add more optional elements to the article card
    return (
      <div className="article-card-large__container">
        <h4 className="article-card-large__heading">{heading}</h4>
        <h5 className="article-card-large__subheading">{subheading}</h5>
        <img src={comingSoonImg} alt="logo" className="article-card-large__image" />
      </div>
    );
  };
  export default ArticleCardLarge;
  
