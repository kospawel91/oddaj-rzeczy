import React from 'react';
import {checkboxes} from './data'
import Checkbox from './Checkbox'
import { useState } from 'react';
import { MultiStepContext } from "../../Firebase/context";
import { useContext } from "react";
import './formStep1.scss'
const FormStep1 = () => {
      const { setStep, userData,setUserData } = useContext(MultiStepContext);
     const [checkedItems, setCheckedItems] = useState({});
        
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  setUserData({ ...userData, [event.target.name]: event.target.checked });
    
  };
    return (
      <div className="check-things">
        <h1 className="check-things-h1">Zaznacz co chcesz oddac</h1>
        <form className="check-things-form">
          <div className="check-things-checkbox">
            {checkboxes.map((item) => (
              <label className="checkbox-container" key={item.key}>
                {item.label}
                <Checkbox

                  name={item.name}
                  checked={checkedItems[item.name]}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
          <div className="check-things-button-wrapper">
            <button onClick={() => setStep(2)} className="btn check-things-btn">
              Dalej
            </button>
          </div>
        </form>
      </div>
    );
};




export default FormStep1;


