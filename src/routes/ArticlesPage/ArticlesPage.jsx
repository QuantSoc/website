import ArticleCardLarge from 'components/ArticleCardLarge';
import './index.less';

import ArticleCard from 'components/ArticleCard'

const ArticlesPage = () => {
  return (
    <div className="articles-page">
      <ArticleCardLarge 
      heading="Lorem Ipsum Dolor sit amet, consectetur adipiscing elit magna aliqua." 
      subheading="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
      <ArticleCard 
      heading="This is a heading for the article" 
      subheading="This is the subheading for an article. It expands on the heading ;P" 
      />
    </div>
  );
};
export default ArticlesPage;
