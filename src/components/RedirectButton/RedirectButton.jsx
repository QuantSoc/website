import { useNavigate } from 'react-router-dom';
import './index.less';

const RedirectButton = ({ btnText, destination }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(destination);
  };

  return (
    <button className="redirect-button" type="button" onClick={handleClick}>
      {btnText}
    </button>
  );
};
export default RedirectButton;
