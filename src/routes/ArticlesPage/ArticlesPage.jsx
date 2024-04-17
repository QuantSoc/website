import ArticleCardLarge from 'components/ArticleCardLarge';
import './index.less';

 
import PreviouslySection from './PreviouslySection/PreviouslySection';
import RecentSection from './RecentSection/RecentSection';

const ArticlesPage = () => {
  return (
    <div className="articles-page">
      {/* The Article Card large is the most recent news article */}
      <RecentSection />
      
      {/* <RecentSection /> */}
      <PreviouslySection />

    </div>
  );
};
export default ArticlesPage;
