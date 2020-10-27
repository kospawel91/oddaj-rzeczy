import React from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    return (
      <ul className="login-buttons">
        <Link to="/login"><li className="login-buttons-item">Zaloguj</li></Link>
        
        <Link to="/register"><li className="login-buttons-item">Załóż konto</li></Link>
      </ul>
    );
};

export default LoginComponent;