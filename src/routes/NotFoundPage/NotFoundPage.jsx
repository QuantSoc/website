import { Link } from 'react-router-dom';
import './index.less';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <p className="text-main">This page is not yet implemented.</p>
      <Link to="/" className="text-main">
        Go back to the home page.
      </Link>
    </div>
  );
};

export default NotFoundPage;
