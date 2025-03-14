import './index.less';

import ArticleCardLarge from 'components/ArticleCardLarge';


import placeholder from 'assets/comingsoon.png'


const RecentSection = () => {
  return (
    <section className="recent-articles">
        <h1>Most Recent</h1>

        <ArticleCardLarge 
        heading="Welcome to our new QuantSoc Newsletter!" 
        subheading="Let's have a look at what is going on this week. " 
        />
        
    </section>
  );
};
export default RecentSection;
