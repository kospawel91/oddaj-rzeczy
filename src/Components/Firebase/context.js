import React from "react";
import { useState } from "react";
//firebaseauth reducer
import { firebaseAuth } from "./reducer";
import firebase from './firebase'

export const Auth = React.createContext();
const initialState = {
  user: {},
};

export const AuthProvider = (props) => {
  const [state, dispatch] = React.useReducer(firebaseAuth, initialState);
  const value = { state, dispatch };

  return <Auth.Provider value={value}>{props.children}</Auth.Provider>;
};

export const MultiStepContext = React.createContext();

export const StepContext = (props) => {
  const [finalData, setFinalData] = useState([]);
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
    clothRecycle: false,
    clothTrash: false,
    toys: false,
    books: false,
    another: false,
    numberOfBags: "",
    Town: "",
    kids: false,
    mother: false,
    invalid: false,
    homles: false,
    old: false,
    street: "",
    city: "",
    postcode: "",
    phone: "",
    date: "",
    time: "",
    kurier: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFinalData({ ...userData });
    
    setFinalData("");
    setUserData("");
    setStep(6);
  };
 
  return (
    <MultiStepContext.Provider
      value={{
        currentStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        handleSubmit,
      }}
    >
      {props.children}
    </MultiStepContext.Provider>
  );
};
