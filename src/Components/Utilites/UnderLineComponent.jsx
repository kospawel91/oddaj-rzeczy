import React from 'react';
import hr from '../../assets/Decoration.svg'

const UnderLineComponent = ({text}) => {
    return (
      <div className="underline">
        <h1 className="underline-h1">{text}</h1>
        <img className="underline-img" src={hr} alt="" />
      </div>
    );
};

export default UnderLineComponent;