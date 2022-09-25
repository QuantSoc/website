import { Link } from 'react-router-dom';
import './index.less';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>
        This page is not yet implemented.
      </h1>
      <Link to="/">
        Go back to the home page.
      </Link>
    </div>
  );
};

export default NotFoundPage;
