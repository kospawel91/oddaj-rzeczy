import React, { useState } from "react";
import { MultiStepContext } from "../../Firebase/context";
import { useContext } from "react";
import styled from "styled-components";
import arrowUp from '../../../assets/Icon-Arrow-Up.svg'
import arrowDown from '../../../assets/Icon-Arrow-Down.svg'
import "./formStep2.scss";
const FormStep2 = () => {
  const { setStep, userData, setUserData } = useContext(MultiStepContext);
  const options = ["1", "2", "3", "4", "5"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  
  return (
    <div className="check-things">
      <h1 className="check-things-h1">
        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
      </h1>

      <div className="check-things-select">
        <div className="check-things-select--wrapper">
          <h3 className="check-things-h3">Liczba 60l worków:</h3>
          <div className="check-things-options">
            <div
             
              className="check-things-choose"
              onClick={toggling}
            >
              {selectedOption || "--wybierz--"}
              <div class={isOpen?'arrow rotated':'arrow'} ></div>
            </div>
            {isOpen && (
              <ul className="check-things-options-list">
                {options.map((option) => (
                  <li
                    className="list-item"
                    onClick={onOptionClicked(option)}
                    key={Math.random()}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="check-things-button-wrapper">
        <button onClick={() => setStep(1)} className="btn check-things-btn">
          Wstecz
        </button>
        <button onClick={() => setStep(3)} className="btn check-things-btn">
          Dalej
        </button>
      </div>
    </div>
  );
};

export default FormStep2;
