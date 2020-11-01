import React from 'react';
import HeaderComponent from './HeaderComponent'
import homeHero from "../../../assets/Form-Hero-Image.jpg";
const Header = () => {
    return (
      <div className="give-away-header">
       
          <div className="header-left">
            <img className="header-img" src={homeHero} />
          </div>

          <div className="header-right">
            <HeaderComponent />
          </div>
        
      </div>
    );
};

export default Header;