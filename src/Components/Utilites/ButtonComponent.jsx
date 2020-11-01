import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

const ButtonComponent = ({ buttonText, route }) => {
  return <Link to={route}><div className=" btn button-text" >{buttonText}</div></Link>;
};

export default ButtonComponent;