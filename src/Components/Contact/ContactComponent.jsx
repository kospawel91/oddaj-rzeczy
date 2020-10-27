import React from "react";
import UnderLineComponent from "../Utilites/UnderLineComponent"

const ContactComponent = () => {
  return (
    <>
      <div className="contact-left" />
      <div className="contact-right">
        <UnderLineComponent text="Skontaktuj się z nami" />
        <form className="contact-right-form" action="submit">
          <div className="form-container">
            <div className="form-input-wraper">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input name="name" type="text" placeholder="Krzysztof" />
            </div>
            <div className="form-input-wraper">
              <label htmlFor="email">Wpisz swój email</label>
              <input name="email" type="email" placeholder="abc@xyz.pl" />
            </div>
          </div>
          <label className="contact-textarea-label" htmlFor="textarea">
            Wpisz swoją wiadomość
          </label>
          <textarea
            className="contact-textarea"
            name="textarea"
            cols="30"
            rows="10"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, rerum eligendi! Facilis, necessitatibus illum! Nisi sed perferendis quod in laborum deserunt, consequuntur ea? Repellendus maiores provident tenetur dolorum. Nisi, quis."
          ></textarea>
          <button className="contact-button" type="submit">
            wyślij
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactComponent;
