import React from 'react';
import ButtonComponent from '../Utilites/ButtonComponent';
import UnderLineComponent from '../Utilites/UnderLineComponent';

const StartHelpingComponent = () => {


    return (
      <div className="helping">
        <UnderLineComponent
          text={`Zacznij pomagać!
Oddaj niechciane rzeczy w zaufane ręce`}
        />
        <div className="button-wrapper">
          <ButtonComponent buttonText={`ODDAJ 
          RZECZY`} />
          <ButtonComponent buttonText={`ZORGANIZUJ 
          ZBIÓRKĘ`} />
        </div>
      </div>
    );
};

export default StartHelpingComponent;