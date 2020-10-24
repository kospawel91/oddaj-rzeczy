import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import FourSteps from '../FourSteps/FourSteps';
import Header from '../Header/Header';
import FourStepsItems from "../Items/FourStepsItems";
import ReturnThings from '../ReturnThings/ReturnThings';
import YellowBar from '../YellowBar/YellowBar';


const MainBody = () => {
    return (
      <div className="Main-Body">
        <Header />
        <YellowBar />
        <FourSteps />
        <FourStepsItems/>
        <ReturnThings/>
        <AboutUs/>
      </div>
    );
};

export default MainBody;

