import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import SignUpForm from "./SignUpForm";
const SignUp = () => {
  return (
    <div>
      <FirebaseContext.Consumer>
        {(firebase) => <SignUpForm firebase={firebase} />}
      </FirebaseContext.Consumer>
    </div>
  );
}

export default SignUp;
