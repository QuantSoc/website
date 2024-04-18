import React from 'react';
import './index.less';
import ArticleCard from 'components/ArticleCard';

const PreviouslySection = () => {

  // Temporary placeholders until data drawn from firebase
  const heading = "This is a heading for the article";
  const subheading = "This is the subheading for an article. It expands on the heading ;P";
  const author = 'Cengiz Cimen';
  const date = '16th Jan 2023';
  const sampletext = 'This is the first couple of lines from the article and gives us an idea of what it is about. Below should be a button sending us where we want to go...';

  return (
    <section className="past-articles">
      <h1>Previously...</h1>
      <div className='previously-flex'>
        <ArticleCard
          heading={heading}
          subheading={subheading}
          author={author}
          date={date}
          sampletext={sampletext}
        />
        <ArticleCard
          heading={heading}
          subheading={subheading}
          author={author}
          date={date}
          sampletext={sampletext}
        />
        <ArticleCard
          heading={heading}
          subheading={subheading}
          author={author}
          date={date}
          sampletext={sampletext}
        />
        <ArticleCard
          heading={heading}
          subheading={subheading}
          author={author}
          date={date}
          sampletext={sampletext}
        />
        <ArticleCard
          heading={heading}
          subheading={subheading}
          author={author}
          date={date}
          sampletext={sampletext}
        />
      </div>
    </section>
  );
};

export default PreviouslySection;
