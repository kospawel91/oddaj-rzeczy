import React from "react";
import { MultiStepContext } from "../../Firebase/context";
import { useContext, useState } from "react";
import "./formStep5.scss";
const FormStep5 = () => {
  const { setStep, userData, setUserData, handleSubmit } = useContext(
    MultiStepContext
  );
  const {
    clothRecycle,
    clothTrash,
    toys,
    books,
    another,
    numberOfBags,
    Town,
    kids,
    mother,
    invalid,
    homles,
    old,
    street,
    city,
    postcode,
    phone,
    date,
    time,
    kurier,
  } = userData;
  console.log(city);

  let verification = (
    <>
      {numberOfBags === 1 ? `${numberOfBags}worek ` : `${numberOfBags} worki `}
      {clothRecycle ? "ubrania w dobrym stanie," : ""}
      {clothTrash ? "Ubrania w złym stanie," : ""}
      {toys ? "zabawki," : ""}
      {books ? "książki," : ""}
      {another ? "inne," : ""}
      {kids ? "dzieciom" : ""}
      {mother ? "mamon" : ""}
      {invalid ? "niepiełnosprawnym" : ""}
      {homles ? "bezdomnym" : ""}
      {old ? "osobom starszym" : ""}
    </>
  );

  return (
    <div className="check-things">
      <h1 className="check-things-h1 s5">Podsumowanie Twojej darowizny</h1>
      <div className="summary-container">
        <div>
          <h3 className="check-things-h3">Oddajesz:</h3>
          <div className="summary-container--tshirt">{verification}</div>
          <div className="summary-container--town">
            {" "}
            dla lokalizacji: {Town}{" "}
          </div>
        </div>
        <div className="summary-container-wrapper">
          <div className="summary-container-left">
            <h3 className="check-things-h3">Adres odbioru:</h3>
            <ul className="summary-container-list">
              <li className="summary-container-item">
                <span>Ulica</span>
                <span>{street}</span>
              </li>
              <li className="summary-container-item">
                <span>Miasto</span>
                <span>{city}</span>
              </li>
              <li className="summary-container-item">
                <span>Kod Pocztowy</span>
                <span>{postcode}</span>
              </li>
              <li className="summary-container-item">
                <span>Numer telefonu</span>
                <span>{phone}</span>
              </li>
            </ul>
          </div>
          <div className="summary-container-right">
            <h3 className="check-things-h3">Termin odbioru:</h3>
            <ul className="summary-container-list">
              <li className="summary-container-item">
                <span>Data</span>
                <span>{date}</span>
              </li>
              <li className="summary-container-item">
                <span>Godzina</span>
                <span>{time}</span>
              </li>
              <li className="summary-container-item">
                <span>Uwagi dla kuriera</span>
                <span>{kurier}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="check-things-button-wrapper">
        <button onClick={() => setStep(4)} className="btn check-things-btn">
          Wstecz
        </button>
        <button
          onClick={handleSubmit}
          className="btn accept-btn  check-things-btn"
        >
          Potwierdzam
        </button>
      </div>
    </div>
  );
};

export default FormStep5;
