import React from "react";
import StartHelpingComponent from "./StartHelpingComponent";
import homeHero from "../../../assets/Home-Hero-Image.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img className="header-img" src={homeHero} />
      </div>

      <div className="header-right">
          <StartHelpingComponent />
      </div>
    </header>
  );
};

export default Header;
