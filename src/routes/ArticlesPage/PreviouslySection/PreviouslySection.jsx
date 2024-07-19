import React, { useEffect, useState } from 'react';
import './index.less';
import ArticleCard from 'components/ArticleCard';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase.config';

const PreviouslySection = () => {
  const [articles, setArticles] = useState([]);
  const heading = "This is a heading for the article";

  useEffect(() => {
    const fetchArticles = async () => {
      const q = query(collection(db, 'articles'), orderBy('id', 'desc'));
      const querySnapshot = await getDocs(q);
      const articlesData = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const date = data.date.toDate(); // Convert Firestore timestamp to Date
        const formattedDate = date.toLocaleDateString('en-GB'); // Format date as DD/MM/YYYY

        return {
          id: doc.id,
          ...data,
          date: formattedDate
        };
      });

      if (articlesData.length > 1) {
        setArticles(articlesData.slice(1)); // Exclude the document with the largest ID
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="past-articles">
      <h1>Previously...</h1>
      <div className='previously-flex'>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            heading={article.heading}
            date={article.date}
            link={article.article}
          />
        ))}
      </div>
    </section>
  );
};

export default PreviouslySection;
