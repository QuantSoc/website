import './index.less';

import ArticleCard from 'components/ArticleCard';

const PreviouslySection = () => {
  return (
    <section className="past-articles">
        <h1>Previously...</h1>
        <div className='previously-flex'>
            {/* NOTE::: until the database is updated the following are temporary placeholders simply to test the flex */}
            <ArticleCard 
            heading="This is a heading for the article" 
            subheading="This is the subheading for an article. It expands on the heading ;P" 
            author='Cengiz Cimen'
            date='16th Jan 2023'
            sampletext={'This is the first couple of lines from the article and gives us an idea of what it is about. Below should be a \
            button sending us where we want to go...'}
            />
            <ArticleCard 
            heading="This is a heading for the article" 
            subheading="This is the subheading for an article. It expands on the heading ;P" 
            author='Cengiz Cimen'
            date='16th Jan 2023'
            sampletext={'This is the first couple of lines from the article and gives us an idea of what it is about. Below should be a \
            button sending us where we want to go...'}
            />
            <ArticleCard 
            heading="This is a heading for the article" 
            subheading="This is the subheading for an article. It expands on the heading ;P" 
            author='Cengiz Cimen'
            date='16th Jan 2023'
            sampletext={'This is the first couple of lines from the article and gives us an idea of what it is about. Below should be a \
            button sending us where we want to go...'}
            />
            <ArticleCard 
            heading="This is a heading for the article" 
            subheading="This is the subheading for an article. It expands on the heading ;P" 
            author='Cengiz Cimen'
            date='16th Jan 2023'
            sampletext={'This is the first couple of lines from the article and gives us an idea of what it is about. Below should be a \
            button sending us where we want to go...'}
            />
            <ArticleCard 
            heading="This is a heading for another article" 
            subheading="This is the subheading for an article. But you already know this" 
            author='Victor Tang'
            date='16th Jan 2024'
            sampletext={'You know I am a really cool guy, I AM! Cooler than most at least. This is a big problem with society \
            I am like the jonkler you cannot fuck with my i will just laugh hahahaha (very cool)...'}
            />
        </div>
        
    </section>
  );
};
export default PreviouslySection;
