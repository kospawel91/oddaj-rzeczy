import React from 'react';
import LoginComponent from "./LoginComponent";
import NavbarComponent from "./NavbarComponent";

const Navbar = () => {
    return (
      <section className="nav">
        <div className="navBack">
          <LoginComponent />
          <NavbarComponent />
        </div>
      </section>
    );
};

export default Navbar;