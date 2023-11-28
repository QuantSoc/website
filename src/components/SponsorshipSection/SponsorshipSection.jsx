import RedirectButton from 'components/RedirectButton';
import Sponsor from 'components/Sponsor';
import SponsorTypeHeader from 'components/SponsorTypeHeader';

import imcLogo from '../../assets/sponsor-logos/imc.svg';
import optiverLogo from '../../assets/sponsor-logos/optiver.svg';
import vivcourtLogo from '../../assets/sponsor-logos/vivcourt.svg';
import sigLogo from '../../assets/sponsor-logos/sig.svg';
import citadelLogo from '../../assets/sponsor-logos/citadel.svg';
import tibraLogo from '../../assets/sponsor-logos/tibra.svg';

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
        <Sponsor logoSrc={imcLogo} sponsorLink="https://www.imc.com/ap" />
      </div>
      <SponsorTypeHeader type="major" />
      <div className="sponsorship-section__logos">
        <Sponsor logoSrc={optiverLogo} sponsorLink="https://www.optiver.com" />
        <Sponsor
          logoSrc={vivcourtLogo}
          sponsorLink="https://www.vivcourt.com"
        />
        <Sponsor logoSrc={sigLogo} sponsorLink="https://www.sig.com" />
        <Sponsor
          logoSrc={citadelLogo}
          sponsorLink="https://www.citadelsecurities.com/"
        />
        <Sponsor logoSrc={tibraLogo} sponsorLink="https://www.tibra.com" />
      </div>
      <div className="sponsorship-section__sponsor-us">
        <p>
          Interact with our growing community and reach out to UNSW&apos;s
          brightest and most passionate minds!
        </p>
        <RedirectButton btnText="Sponsor Us" destination="/sponsorship" />
      </div>
    </section>
  );
};
export default SponsorshipSection;
