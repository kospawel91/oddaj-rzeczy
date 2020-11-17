import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ButtonComponent from "../Utilites/ButtonComponent";
import UnderLineComponent from "../Utilites/UnderLineComponent";
import firebase from "../Firebase/firebase";
import { Auth } from "../Firebase/context";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [routeRedirect, setRouteRedirect] = useState(false);

  const { state, dispatch } = React.useContext(Auth);

  const login = async (e) => {
    e.preventDefault();
    let response = await firebase.login(email, password);
    if (response.hasOwnProperty("message")) {
      console.log(response.message);
    } else {
      //console.log(response.user);
      setRouteRedirect(true);
      return dispatch({
        type: "LOGIN",
        payload: response.user,
      });
    }
  };

  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <div className="login-container">
        <UnderLineComponent text="Zaloguj się" />

        <form className="login-form" onSubmit={login}>
          <div className="login-wraper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Hasło</label>
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-pagebuttons">
            <Link to="/register">
              <div className="btn">Załóż konto</div>
            </Link>
            <>
              <button type="submit" className="btn">
                Zaloguj
              </button>
            </>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
