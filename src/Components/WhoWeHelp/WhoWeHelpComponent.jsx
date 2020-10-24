import React from "react";
import UnderLineComponent from "../Utilites/UnderLineComponent";
import ButtonComponent from "../Utilites/ButtonComponent";
const WhoWeHelpComponent = () => {
  return (
    <>
      <div className="whowehelp-buttons">
        <UnderLineComponent text="Komu pomagamy?" />
      </div>
      <div className="whowehelp-organization">
        <ButtonComponent buttonText="Fundacja" />
        <ButtonComponent
          buttonText={`Organizacja
        pozarządowym`}
        />
        <ButtonComponent
          buttonText={`Lokalnym
        Zbiórkom`}
        />
      </div>
      <div className="whowehelp-text">Losowy Tekst</div>
    </>
  );
};

export default WhoWeHelpComponent;
