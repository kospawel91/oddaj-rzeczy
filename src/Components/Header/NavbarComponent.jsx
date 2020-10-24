import React from 'react';

const NavbarComponent = () => {
    const navMenu = ["Start","O co chodzi?", "O nas", "Fundacja i organizacje", "Kontakt"]
    return (
        <ul className="navbar">
          {navMenu.map((el, i) => (
            <li className="navbar-item" key={i}>
              {el}
            </li>
          ))}
        </ul>
    );
};

export default NavbarComponent;