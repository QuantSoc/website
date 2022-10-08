/* eslint-disable */
import { Typography } from 'antd';
import QuantSocLogo from 'components/common/QuantSocLogo';
import './index.less';

const { Text } = Typography;


// TODO: Wrapper around antd nav
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="badge">
        <QuantSocLogo type="circle" style={{ width: '3rem', height: '3rem' }} />
        <div className="title">uantsoc</div>
      </div>
      <div className="menuTabs">
        <div className='menuWord'>
          EVENTS
        </div>
        <div className='menuWord'>
          RESOURCES
        </div>
        <div className='menuWord'>
          ABOUT US
        </div>
        <div className='menuWord'>
          SPONSORS
        </div>
        <div className="menuWord">
          CONTACT US
        </div>
      </div>
      <div className="links">
        {/* <Link></Link> */}
      </div>
    </div>
  );
};

export default NavBar;
