import React,{useEffect, useState}from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../Utilites/ButtonComponent";
import UnderLineComponent from "../Utilites/UnderLineComponent";
import  { FirebaseContext } from '../Firebase'

import "firebase/auth";

const LoginPage = () => {

  return (
    <div className="login">
      <div className="login-container">
        <UnderLineComponent text="Zaloguj się" />
        <div className="login-wraper">
          <form className="login-form">
            <label htmlFor="loginEmail">Email</label>
            <input name="loginEmail" type="email" />
            <label htmlFor="loginPass">Hasło</label>
            <input name="loginPass" type="password" />
            <button type="submit">Zaloguj</button>
          </form>
        </div>
        <div className="login-pagebuttons">
          <Link to="/register">
            <ButtonComponent buttonText="Załuż konto" />
          </Link>
        </div>
      </div>
      <FirebaseContext.Consumer>
        {(firebase) => {
          return <div>I've access to Firebase and render something.</div>;
        }}
      </FirebaseContext.Consumer>
    </div>
  );
};

export default LoginPage;
