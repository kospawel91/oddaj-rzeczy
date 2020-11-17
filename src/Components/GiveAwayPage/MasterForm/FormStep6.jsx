import React from 'react';
import UnderLineComponent from '../../Utilites/UnderLineComponent';
import './formStep6.scss';
const FormStep6 = () => {
    return (
      <div className="thx">
        <UnderLineComponent text={`Dziękujemy za przesłanie formularza 
        Na maila prześlemy wszelkie 
        informacje o odbiorze.`}/>
      </div>
    );
};

export default FormStep6;