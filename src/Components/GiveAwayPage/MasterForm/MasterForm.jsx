import React from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import {MultiStepContext} from '../../Firebase/context'
import { useContext } from 'react';
import './masterForm.scss'
const MasterForm = () => {
    
    const {currentStep,finalData}=useContext(MultiStepContext);
    const showStep=(step)=>{
        console.log(step);
        switch (step) {
          case 1:
            return <FormStep1 />;
          case 2:
            return <FormStep2 />;
          case 3:
            return <FormStep3 />;
          case 4:
            return <FormStep4 />;
          default:
            break;
        }
    }
    return (
      <div className="master-form">
        <div className="master-form-container">
          <div className="master-form-steps">Krok {currentStep}/4</div>
            {showStep(currentStep)}
          </div>
      </div>
    );
};

export default MasterForm;