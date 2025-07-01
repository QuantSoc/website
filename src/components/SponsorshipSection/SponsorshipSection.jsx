import RedirectButton from 'components/RedirectButton';
import Sponsor from 'components/Sponsor';
import SponsorTypeHeader from 'components/SponsorTypeHeader';

// Normal logos
import imcLogo from '../../assets/sponsor-logos/imc.svg';
import optiverLogo from '../../assets/sponsor-logos/optiver.svg';
import vivcourtLogo from '../../assets/sponsor-logos/vivcourt.svg';
import citadelLogo from '../../assets/sponsor-logos/citadel.svg';
import janestreetLogo from '../../assets/sponsor-logos/JS_horizontal_black.png';
import sigLogo from '../../assets/sponsor-logos/sig.png';

// Inverted lgoos
import optiverLogoInv from '../../assets/sponsor-logos/optiver-alt.svg';
import vivcourtLogoInv from '../../assets/sponsor-logos/vivcourt-alt.svg';
import citadelLogoInv from '../../assets/sponsor-logos/citadel-alt.svg';
import janestreetLogoInv from '../../assets/sponsor-logos/JS_horizontal_white.png';
import sigLogoInv from '../../assets/sponsor-logos/sig-alt.svg';
import imcLogoInv from '../../assets/sponsor-logos/IMC_logo.png';

import './index.less';

const SponsorshipSection = () => {
  return (
    <section className="sponsorship-section">
      <h1 className="sponsorship-section__header">Sponsors</h1>
      <p>
        Special thanks to our sponsors, whose unwavering support helps turn our
        shared visions into a reality.
      </p>
      <SponsorTypeHeader type="principal" />
      <div className="sponsorship-section__logos">
        <Sponsor logoSrc={janestreetLogo} logoSrcInv={janestreetLogoInv} sponsorLink="https://www.janestreet.com/" />
        <Sponsor logoSrc={sigLogo} logoSrcInv={sigLogoInv} sponsorLink="https://www.sig.com" />
      </div>
      <SponsorTypeHeader type="major" />
      <div className="sponsorship-section__logos">
        <Sponsor logoSrc={citadelLogo} logoSrcInv={citadelLogoInv} sponsorLink="https://www.citadelsecurities.com/" />          
        <Sponsor logoSrc={imcLogo} logoSrcInv={imcLogoInv} sponsorLink="https://www.imc.com/ap" />
        <Sponsor logoSrc={optiverLogo} logoSrcInv={optiverLogoInv} sponsorLink="https://www.optiver.com" />
        <Sponsor logoSrc={vivcourtLogo} logoSrcInv={vivcourtLogoInv} sponsorLink="https://www.vivcourt.com" />
      </div>
      <p>
      Want to sponsor us? Get in touch with our team and we would be more than delighted to discuss partnership opportunities and potential collaborations!
      </p>
      <a href="mailto:contact@unswquantsoc.org" class="sponsor-button">
      Sponsor Us
      </a>

    </section>
  );
};
export default SponsorshipSection;
