import './index.less';

const ArticleCardLarge = ({
    heading,
    subheading,
    image
}) => {
    // TODO: add more optional elements to the article card and automate the main page
    return (
      <div className="article-card-large__container">
        {/* <h4 className="article-card-large__heading">{heading}</h4>
        <h5 className="article-card-large__subheading">{subheading}</h5> */}
        <iframe className='article-card-large__embed' src="https://preview.mailerlite.io/preview/829979/emails/122848449040221658" title="recent"></iframe>
      </div>
    );
  };
  export default ArticleCardLarge;
  
