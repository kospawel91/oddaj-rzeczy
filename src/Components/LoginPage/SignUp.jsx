import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../Utilites/ButtonComponent";
import UnderLineComponent from "../Utilites/UnderLineComponent";
const SignUp = () => {
  return (
    <div className="login">
      <div className="login-container">
        <UnderLineComponent text="Zarejestruj się" />
        <div className="login-wraper">
          <form className="login-form" action="subbmit">
            <label htmlFor="login-email">Email</label>
            <input name="login-email" type="email" />
            <label htmlFor="login-pass">Hasło</label>
            <input name="login-pass" type="password" />
            <label htmlFor="login-pass">Powtórz hasło</label>
            <input name="login-pass" type="password" />
          </form>
        </div>
        <div className="login-pagebuttons">
         <Link to="/login"><ButtonComponent buttonText="Zaloguj" /></Link> 
          <ButtonComponent buttonText="Załuż konto" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
