import React from 'react';
import { useContext } from "react";

import { MultiStepContext } from "../../Firebase/context";
const ShowSteps = () => {
     const { currentStep } = useContext(MultiStepContext);
    return (
        <div className="master-form-steps">Krok {currentStep}/4</div>
    );
};

export default ShowSteps;