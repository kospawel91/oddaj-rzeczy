import React from "react";
import { Link as NavLink, animateScroll as scroll } from "react-scroll";

const NavbarComponent = () => {
  const navMenu = [
    {
      name: "Start",
      id: "header",
    },
    {
      name: "O co chodzi?",
      id: "yellowBar",
    },
    {
      name: "O nas",
      id: "about-us",
    },
    {
      name: "Fundacja i organizacje",
      id: "whowehelp",
    },
    {
      name: "Kontakt",
      id: "contact",
    },
  ];
  return (
    <ul className="navbar">
      {navMenu.map((el, i) => (
        <li className="navbar-item" key={i}>
          <NavLink
            activeClass="active"
            to={el.id}
            spy={true}
            smooth={true}
            offset={-105}
            duration={500}
            className="no-active"
          >
            {el.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarComponent;
