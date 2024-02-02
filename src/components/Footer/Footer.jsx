import QuantSocLogo from 'components/QuantSocLogo';
import './index.less';
// prettier-ignore
import {
  BsFacebook,
  BsLinkedin,
  BsDiscord,
  BsGithub,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <div id="footer">
      <QuantSocLogo />
      <div id="footer-main">
        <div id="promotion" className="">
          <p className="tagline">Empowering Quantitative Futures</p>
          <p id="email-feedback">
            Have questions, feedback or suggestions?
            <br />
            <a className="link" href="mailto:unsw.quantsoc@gmail.com">
              Email us here!
            </a>
          </p>
          <p id="newsletter-subscription">Subscribe to our newsletter</p>
          <input
            id="newsletter-textfield"
            type="email"
            placeholder="Coming Soon"
          />
        </div>
        <div className="nav-link-container">
          <div id="exploration" className="nav-link-section">
            <p className="nav-link-header">EXPLORE</p>
            <ul>
              <li>
                <a className="nav-link" href="https://mtg.quantsoc.org">
                  Mock Trading Game
                </a>
              </li>
              <li>
                <a className="nav-link" href="/events">
                  Events
                </a>
              </li>
              <li>
                <a className="nav-link" href="/resources">
                  Resources
                </a>
              </li>
              <li>
                <a className="nav-link" href="/sponsors">
                  Sponsors
                </a>
              </li>
            </ul>
          </div>
          <div id="socials" className="nav-link-section">
            <p className="nav-link-header">CONNECT WITH US</p>
            <ul>
              <li>
                <a
                  className="nav-link"
                  href="https://www.facebook.com/unswquantsoc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook className="icon" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/company/quantsoc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin className="icon" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://discord.gg/2qYRNKubRz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsDiscord className="icon" />
                  Discord
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://github.com/QuantSoc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="icon" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider" />
      <p id="copyright">{`© Copyright ${new Date().getFullYear()} QuantSoc UNSW`}</p>
    </div>
  );
};
export default Footer;
