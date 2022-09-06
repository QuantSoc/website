import QuantSocLogo from 'components/common/QuantSocLogo';
import './index.scss';

// TODO: Wrapper around antd nav
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="badge">
        <QuantSocLogo type="circle" style={{ width: '3rem', height: '3rem' }} />
        <div className="title">uantsoc</div>
      </div>
      <div className="links">
        {/* <Link></Link> */}
      </div>
    </div>
  );
};

export default NavBar;
