import React from "react";
import UnderLineComponent from "../../Utilites/UnderLineComponent";
import ButtonComponent from "../../Utilites/ButtonComponent";
import OrganizationDataComponent from "./OrganizationDataComponent";
const WhoWeHelpComponent = () => {
  return (
    <>
      <div className="whowehelp-under">
        <UnderLineComponent text="Komu pomagamy?" />
      </div>
      <div className="whowehelp-buttons">
        <ButtonComponent buttonText="Fundacjom" />
        <ButtonComponent
          buttonText={`Organizacjom
        pozarządowym`}
        />
        <ButtonComponent
          buttonText={`Lokalnym
        Zbiórkom`}
        />
      </div>
      <div className="whowehelp-wrapper">
        <div className="whowehelp-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas,
          illum aut reprehenderit neque quos atque quisquam eligendi, suscipit
          praesentium earum architecto labore omnis et sequi harum natus numquam
          vel.
        </div>
      </div>
      <OrganizationDataComponent/>
    </>
  );
};

export default WhoWeHelpComponent;
