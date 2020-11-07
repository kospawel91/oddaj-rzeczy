import React from 'react';
import { MultiStepContext } from "../../Firebase/context";
import { useContext,useState } from "react";
import { kurierDataAderss} from './data';
import InputKurier from './InputKurier';

const FormStep4 = () => {
    const { setStep, userData, setUserData } = useContext(MultiStepContext);
    const [form, setForm] = useState({ street:'',city:'',postcode:'',phone:'',date:'',time:'',kurier:''});
    const handleChangeKurier = (e)=>{
 const { name, value } = e.target;
 setForm((prevState) => {
   return { ...prevState, [name]: value };
 });
    }
    
    
    return (
      <div className="check-things">
        <h1 className="check-things-h1">
          Podaj adres oraz termin odbioru rzecz przez kuriera
        </h1>
        <div className="kurier-container">
          <div className="kurier-container-left">
            <h1>Adres odbioru:</h1>
            <ul>
              {kurierDataAderss.map((item, i) => (
                <li key={item.id}>
                  <label htmlFor={item.id}>{item.name}</label>
                  <InputKurier name={item.id} onChange={handleChangeKurier} />
                </li>
              ))}
            </ul>
          </div>
          <div className="kurier-container-right">
            <h1>Termin odbioru:</h1>
            <label htmlFor="date">Data</label>
            <input
              type="date"
              id="date"
              name="date"
              min="2018-01-01"
              max="2022-12-31"
              onChange={handleChangeKurier}
            />
            <label htmlFor="time">Godzina</label>
            <input
              type="time"
              name="time"
              min="09:00"
              max="18:00"
              onChange={handleChangeKurier}
            />
            <label htmlFor="kurier">Uwagi dla kuriera</label>
            <textarea
              name="kurier"
              id="kurier"
              onChange={handleChangeKurier}
            ></textarea>
          </div>
        </div>

        <div className="check-things-button-wrapper">
          <button onClick={() => setStep(3)} className="btn check-things-btn">
            Wstecz
          </button>
          <button className="btn check-things-btn">Submit</button>
        </div>
      </div>
    );
};

export default FormStep4;


