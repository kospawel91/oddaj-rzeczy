import React,{useEffect, useState}from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../Utilites/ButtonComponent";
import UnderLineComponent from "../Utilites/UnderLineComponent";
import db from '../../config/firebase'
import "firebase/auth";
import App from './testLogin'
const LoginPage = () => {

    const [form, setForm] = useState({ loginEmail: "", loginPass: "" });
  const [user, setUser] = useState({ loggedIn: false });
  useEffect(() => authListener(),[]);
  
  const authListener=()=>{
    db.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser({ user });
      } else {
        setUser({ user: null });
      }
    });
  }
  
    const handleOnChangeInput = (e) => {
      const { name, value } = e.target;
      setForm((prevState) => {
        return { ...prevState, [name]: value };
      });
    };

    const handleLogin = (e) => {
      e.preventDefault();
      db.auth()
        .signInWithEmailAndPassword(form.loginEmail, form.loginPass)
        .then((u) => {})
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <div className="login">
      <div className="login-container">
        <UnderLineComponent text="Zaloguj się" />
        <div className="login-wraper">
          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="loginEmail">Email</label>
            <input
              name="loginEmail"
              onChange={handleOnChangeInput}
              value={form.loginEmail}
              type="email"
            />
            <label htmlFor="loginPass">Hasło</label>
            <input
              name="loginPass"
              type="password"
              onChange={handleOnChangeInput}
              value={form.loginPass}
            />
            <button type="submit">Zaloguj</button>
          </form>
        </div>
        <div className="login-pagebuttons">
          <Link to="/register">
            <ButtonComponent buttonText="Załuż konto" />
          </Link>
         <App/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
