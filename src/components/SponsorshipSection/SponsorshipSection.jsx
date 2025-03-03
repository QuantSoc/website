import RedirectButton from 'components/RedirectButton';
import Sponsor from 'components/Sponsor';
import SponsorTypeHeader from 'components/SponsorTypeHeader';

import imcLogo from '../../assets/sponsor-logos/imc.svg';
import optiverLogo from '../../assets/SponsorImages/optiver-2.png';
import vivcourtLogo from '../../assets/sponsor-logos/vivcourt.svg';
import sigLogo from '../../assets/SponsorImages/SUSQUEHANNA_Logo_blue.png';
import citadelLogo from '../../assets/SponsorImages/citadel-2.png';
import tibraLogo from '../../assets/sponsor-logos/tibra.svg';
import janestreetLogo from '../../assets/sponsor-logos/jane-street.svg'

import './index.less';

const SponsorshipSection = () => {
  return (
    <section className="sponsorship-section">
      <h1 className="sponsorship-section__header">Our Sponsors</h1>
      <p>
        Special thanks to our sponsors, whose unwavering support helps turn our
        shared visions into a reality.
      </p>
      <SponsorTypeHeader type="principal" />
      <div className="sponsorship-section__logos">
        <Sponsor logoSrc={janestreetLogo} sponsorLink="https://www.janestreet.com/" />
        <Sponsor logoSrc={sigLogo} sponsorLink="https://www.sig.com" />
      </div>
      <SponsorTypeHeader type="major" />
      <div className="sponsorship-section__logos">
        <Sponsor logoSrc={optiverLogo} sponsorLink="https://www.optiver.com" />
        <Sponsor logoSrc={vivcourtLogo} sponsorLink="https://www.vivcourt.com" />
        <Sponsor logoSrc={citadelLogo} sponsorLink="https://www.citadelsecurities.com/" />          
        <Sponsor logoSrc={imcLogo} sponsorLink="https://www.imc.com/ap" />
      </div>
      <p>
      If you wish to sponsor us, reach out to our society, and we would be delighted to discuss partnership opportunities and collaborate on valuable experiences together!
      </p>
      <a href="mailto:quantsoc.unsw@gmail.com" class="sponsor-button">
      SPONSOR US
      </a>

    </section>
  );
};
export default SponsorshipSection;
