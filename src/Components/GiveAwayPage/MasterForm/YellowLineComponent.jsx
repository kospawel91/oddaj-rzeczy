import React from 'react';
import { MultiStepContext } from "../../Firebase/context";
import { useContext } from "react";
import './yellowLineComponent.scss';
const YellowLineComponent = () => {
    const { currentStep, finalData } = useContext(MultiStepContext);
      const showYellowBar = (step) => {
        console.log(step);
        switch (step) {
          case 1:
            return (
              <YelloText
                
                text="Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
              />
            );
          case 2:
            return (
              <YelloText
                
                text="Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."
              />
            );
          case 3:
            return (
              <YelloText text="Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy." />
            );
          case 4:
            return <YelloText text="Podaj adres oraz termin odbioru rzeczy." />;
          default:
            break;
        }
      };
    return (
        <div className="import-yellow-bar">
            {showYellowBar(currentStep)}
        </div>
    );
};
 const YelloText = ({ text }) => (
   <>
     <h1 className="import-yellow-bar-h1">Ważne!!</h1>
     <p className="import-yellow-bar-text">{text}</p>
   </>
 );
    
export default YellowLineComponent; 


 