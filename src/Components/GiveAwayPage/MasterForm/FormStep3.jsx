import React from "react";
import { MultiStepContext } from "../../Firebase/context";
import { useContext, useState } from "react";
import { checkBoxWho} from "./data";
import Checkbox from "./Checkbox";
import "./formStep3.scss";
const FormStep3 = () => {
  const { setStep, userData, setUserData } = useContext(MultiStepContext);
  const location = ["Poznan", "Warszawa", "Kraków", "Wrocław", "Katowice"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = useState({});
  const [organization,setOrganization]=useState("")
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setUserData({...userData,"Town":value})
    setIsOpen(false);
    
  };

  const handleChanges = (event) => {
     setChecked({
       ...checked,
       [event.target.name]: event.target.checked,
     });
     setUserData({ ...userData, [event.target.name]: event.target.checked });

   };

  return (
    <div className="check-things">
      <h1 className="check-things-h1">Lokalizacja:</h1>
      <div className="check-things-select--wrapper">
        <div className="check-things-options">
          <div className="check-things-choose step3" onClick={toggling}>
            {selectedOption || "--wybierz--"}
            <div class={isOpen ? "arrow rotated" : "arrow"}></div>
          </div>
          {isOpen && (
            <ul className="check-things-options-list list-location">
              {location.map((option) => (
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
      <div>
        <h1 className="check-things-h3">Komu chesz pomuc:</h1>
        <div className="check-things-who-help">
          <ul className="who-help-list">
            {checkBoxWho.map((item) => (
              <li className="who-help-list-item" key={item.key}>
                <Checkbox
                  name={item.name}
                  checked={checked[item.name]}
                  onChange={handleChanges}
                />
                <label htmlFor={item.name}>{item.label}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="check-things-organization">
        <h1 className="check-things-h3">
          Wpsiz nazwę organizacji (opcjonalne)
        </h1>
        <input
          className="check-things-organization-input"
          type="text"
          onChange={(e) => setOrganization(e.target.value)}
        />
      </div>

      <div className="check-things-button-wrapper">
        <button onClick={() => setStep(2)} className="btn check-things-btn">
          Wstecz
        </button>
        <button onClick={() => setStep(4)} className="btn check-things-btn">
          Dalej
        </button>
      </div>
    </div>
  );
};

export default FormStep3;
