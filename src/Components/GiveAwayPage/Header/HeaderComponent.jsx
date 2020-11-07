import React from "react";
import classNames from "classnames";
import { MultiStepContext } from "../../Firebase/context";
import { useContext } from "react";
import UnderLineComponent from "../../Utilites/UnderLineComponent";
const HeaderComponent = () => {
   const { currentStep } = useContext(MultiStepContext);
   const squares = [
     { text: "Wybierz rzeczy", num: 1 },
     { text: "Spakuj w worki", num: 2 },
     { text: "Wybierz fundacje", num:3 },
     { text: "Zamów kuriera", num: 4 },
   ];



  return (
    <div className="helping giveaway">
      <UnderLineComponent
        text={`Zacznij pomagać!
Oddaj niechciane rzeczy w zaufane ręce`}
      />
      <h1>Wystarczą 4 proste kroki:</h1>
      <div className="content">
        <div className="squares">
          {squares.map((item) => (
            <div className={item.num==currentStep?"square-1 square-active":"square-1"} key={item.num}>
              <span>{item.num}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
