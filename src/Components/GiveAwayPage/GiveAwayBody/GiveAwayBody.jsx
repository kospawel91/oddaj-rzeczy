import React from 'react';
import Header from '../Header/Header';
import MasterForm from '../MasterForm/MasterForm';
import YellowLineComponent from '../MasterForm/YellowLineComponent';
import Contact from '../../Contact/Contact'
import { MultiStepContext } from "../../Firebase/context";
import { useContext } from "react";
const GiveAwayBody = () => {
  const { currentStep, finalData } = useContext(MultiStepContext);
    return (
      <section className="give-away">
        <Header />
        {currentStep>4?"":<YellowLineComponent />}
        <MasterForm />
        <Contact/>
      </section>
    );
};

export default GiveAwayBody;