import React from "react";
import { useState } from "react";
//firebaseauth reducer
import { firebaseAuth } from "./reducer";

export const Auth = React.createContext();
const initialState = {
  user: {},
};

export const AuthProvider = (props) => {
  const [state, dispatch] = React.useReducer(firebaseAuth, initialState);
  const value = { state, dispatch };

  return (
    <Auth.Provider value={value}>
      {props.children}
    </Auth.Provider>
  );
};

export const MultiStepContext = React.createContext();

 export const StepContext = (props) => {
   const [currentStep, setStep] = useState(1);
   const [userData, setUserData] = useState([]);
   const [finalData, setFinalData] = useState([]);
   return(
     <MultiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData}}>
     {props.children}
     </MultiStepContext.Provider>
   );
 };
