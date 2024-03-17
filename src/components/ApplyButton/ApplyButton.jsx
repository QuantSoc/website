import { useNavigate } from 'react-router-dom';
import './index.less';

const ApplyButton = ({ btnText, destination }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (destination.includes('http')) {
      window.open(destination, '_blank', 'noopener,noreferrer');
      return;
    }
    navigate(destination);
  };

  return (
    <button className="apply-button" type="button" onClick={handleClick}>
      {btnText}
    </button>
  );
};
export default ApplyButton;
