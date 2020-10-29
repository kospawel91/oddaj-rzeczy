import React, { useState } from "react";
import { Link } from "react-router-dom";
import UnderLineComponent from "../Utilites/UnderLineComponent";

const SignUpForm = ({ firebase }) => {
  const INITIAL_STATE = {
    username: "",
    passwordOne: "",
    passwordTwo: "",
  };
  const [form, setForm] = useState({ ...INITIAL_STATE });

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .doCreateUserWithEmailAndPassword(form.username, form.passwordOne)
      .then((authUser) => {
        setForm({ ...INITIAL_STATE });
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  };

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const isInvalid =
    form.passwordOne !== form.passwordTwo ||
    form.passwordOne === "" ||
    form.username === "";

  return (
    <div className="login">
      <div className="login-container">
        <UnderLineComponent text="Zarejestruj się" />
        <div className="login-wraper">
          <form className="login-form" onSubmit={handleSignUp}>
            <label htmlFor="username">Email</label>
            <input
              name="username"
              type="email"
              onChange={handleOnChangeInput}
              value={form.username}
            />
            <label htmlFor="passwordOne">Hasło</label>
            <input
              name="passwordOne"
              type="password"
              onChange={handleOnChangeInput}
              value={form.passwordOne}
            />
            <label htmlFor="passwordTwo">Powtórz hasło</label>
            <input
              name="passwordTwo"
              type="password"
              onChange={handleOnChangeInput}
              value={form.passwordTwo}
            />
            <div className="login-pagebuttons">
              <Link to="/login">
                <button>Zaloguj</button>
              </Link>
              <button disabled={isInvalid} type="submit">
                Załuz konto
              </button>
            </div>
            {form.error && <p>{form.error.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
