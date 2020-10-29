import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
const LoginComponent = () => {
    return (
      <ul className="login-buttons">
        <Link to={ROUTES.SIGN_IN}><li className="login-buttons-item">Zaloguj</li></Link>
        
        <Link to={ROUTES.SIGN_UP}><li className="login-buttons-item">Załóż konto</li></Link>
      </ul>
    );
};

export default LoginComponent;