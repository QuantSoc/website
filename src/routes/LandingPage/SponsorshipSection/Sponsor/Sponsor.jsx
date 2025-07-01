import { useEffect, useState } from "react";
import "./index.less";

const Sponsor = ({ logoSrc, sponsorLink, logoSrcInv }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="sponsor__container">
      <a href={sponsorLink} target="_blank" rel="noreferrer">
        <img
          src={logoSrc} // For now we only use light mode so this doesn't matter
          alt="sponsor"
          className="sponsor__logo"
        />
      </a>
    </div>
  );
};

export default Sponsor;
