import React from 'react';
import ins from '../../assets/Instagram.svg'
import fb from '../../assets/Facebook.svg'

const FooterComponent = () => {
    return (
      <>
        <div className="copyright">Copyright by Coders Lab</div>
        <div className="copyright">
            <img src={fb} alt=""/>
            <img src={ins} alt=""/>
        </div>
      </>
    );
};

export default FooterComponent;