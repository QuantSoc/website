import './index.less';

import ArticleCardLarge from 'components/ArticleCardLarge';


import placeholder from 'assets/comingsoon.png'


const RecentSection = () => {
  return (
    <section className="recent-articles">
        <h1>Recent</h1>

        <ArticleCardLarge 
        heading="Lorem Ipsum Dolor sit amet, consectetur adipiscing elit magna aliqua." 
        subheading="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " 
        image={placeholder}
        />
        
    </section>
  );
};
export default RecentSection;
