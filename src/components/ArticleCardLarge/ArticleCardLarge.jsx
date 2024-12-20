import './index.less';

import {
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore';

import { db } from '../../firebase.config';

import React, { useEffect, useState } from 'react';



const ArticleCardLarge = ({
  heading,
  subheading,
  image
}) => {
  const [articleUrl, setArticleUrl] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      const q = query(collection(db, 'articles'), orderBy('id', 'desc'));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const largestIdDoc = querySnapshot.docs[0];
        const articleData = largestIdDoc.data();
        if (articleData && articleData.article) {
          setArticleUrl(articleData.article);
        }
      }
    };

    fetchArticle();
  }, []);

  return (
    <div className="article-card-large__container">
      {/* <h4 className="article-card-large__heading">{heading}</h4>
      <h5 className="article-card-large__subheading">{subheading}</h5> */}
      {articleUrl && (
        <iframe
          className='article-card-large__embed'
          src={articleUrl}
          title="recent"
        />
      )}
    </div>
  );
};

  export default ArticleCardLarge;
  
