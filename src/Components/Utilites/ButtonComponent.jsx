import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

const ButtonComponent = ({ buttonText, route, onClick }) => {
  return <Link to={route}><div className=" btn button-text" onClick={onClick} >{buttonText}</div></Link>;
};

export default ButtonComponent;