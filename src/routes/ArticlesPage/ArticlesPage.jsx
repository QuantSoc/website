import ArticleCardLarge from 'components/ArticleCardLarge';
import './index.less';

 
import PreviouslySection from './PreviouslySection/PreviouslySection';
import RecentSection from './RecentSection/RecentSection';
import HeroSection from './HeroSection/HeroSection';


const ArticlesPage = () => {
  return (
    <div id="articles-page">
      <HeroSection />
      {/* The recent section contains the most recent news article */}
      <RecentSection />
      
      {/* This displays a bunch of links to the previous articles */}
      <PreviouslySection />

    </div>
  );
};
export default ArticlesPage;
