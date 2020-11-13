import React from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import FormStep5 from './FormStep5';
import FormStep6 from './FormStep6';
import {MultiStepContext} from '../../Firebase/context'
import { useContext } from 'react';
import './masterForm.scss'
import ShowSteps from './showSteps';

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
          case 5:
            return <FormStep5 />;
          case 6:
            return <FormStep6 />;
          default:
            break;
        }
    }
    return (
      <div className="master-form">
       
        <div className="master-form-container">
         {currentStep>4?"":<ShowSteps/>}
            {showStep(currentStep)}
          </div>
      </div>
    );
};

export default MasterForm;