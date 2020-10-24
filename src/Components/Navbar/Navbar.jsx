import React from 'react';
import LoginComponent from "./LoginComponent";
import NavbarComponent from "./NavbarComponent";

const Navbar = () => {
    return (
      <navbar className="nav">
        <LoginComponent />
        <NavbarComponent />
      </navbar>
    );
};

export default Navbar;