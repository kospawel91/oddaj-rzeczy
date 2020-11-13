import React, { useState } from "react";
import firebase from "../Firebase/firebase";
import { Redirect, Link } from "react-router-dom";
import { Auth } from "../Firebase/context";
import UnderLineComponent from "../Utilites/UnderLineComponent";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const [routeRedirect, setRouteRedirect] = useState(false);
  const { state, dispatch } = React.useContext(Auth);

  const signin = async (e) => {
    console.log(state);
    e.preventDefault();

    let response = await firebase.signin(email, password);
    if (response.hasOwnProperty("message")) {
      console.log(response.message);
    } else {
      console.log(response.user);
      setRouteRedirect(true);
      return dispatch({
        type: "SIGNIN",
        payload: response.user,
      });
    }
  };

  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/" />;
  }
  const isInvalid = password !== passwordTwo || password === "" || email === "";

  return (
    <div className="login">
      <div className="login-container">
        <UnderLineComponent text="Zarejestruj się" />
        <form className="login-form" onSubmit={signin}>
          <div className="login-wraper">
            <label htmlFor="enauk">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="passwordOne">Hasło</label>
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="passwordTwo">Powtórz hasło</label>
            <input
              name="passwordTwo"
              type="password"
              onChange={(e) => setPasswordTwo(e.target.value)}
            />
          </div>
          <div className="login-pagebuttons">
            <Link to="/login">
              <button className="btn">Zaloguj</button>
            </Link>
            <button
              className="btn"
              disabled={isInvalid}
              value="Create account"
              type="submit"
            >
              Załóz konto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
