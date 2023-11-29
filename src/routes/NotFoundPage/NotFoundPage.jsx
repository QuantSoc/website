import { Link } from 'react-router-dom';
import notFoundBanner from 'assets/quantsoc-graphics/not-found.svg';
import './index.less';

const NotFoundPage = () => {
  return (
    <div className="not-found-page page">
      <h2>This page is not yet implemented.</h2>
      <img
        className="not-found-image"
        src={notFoundBanner}
        alt="quantsoc-page-not-found-illustration"
        loading="eager"
      />
      {/* prettier-ignore */}
      <p>
        Source:
        {' '}
        <a href="https://popsy.co/">popsy.co</a>
      </p>
      <Link to="/" className="text-main">
        Go back to the home page.
      </Link>
    </div>
  );
};

export default NotFoundPage;
