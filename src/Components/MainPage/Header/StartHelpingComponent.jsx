import React from 'react';
import ButtonComponent from '../../Utilites/ButtonComponent';
import UnderLineComponent from '../../Utilites/UnderLineComponent';
import * as ROUTES from "../../../constants/routes";

const StartHelpingComponent = () => {


    return (
      <div className="helping">
        <UnderLineComponent
          text={`Zacznij pomagać!
Oddaj niechciane rzeczy w zaufane ręce`}
        />
        <div className="button-wrapper">
          <ButtonComponent
            route={
              ROUTES.GIVE_AWAY
            }
            buttonText={`ODDAJ 
          RZECZY`}
          />
          <ButtonComponent
            buttonText={`ZORGANIZUJ 
          ZBIÓRKĘ`}
          />
        </div>
      </div>
    );
};

export default StartHelpingComponent;