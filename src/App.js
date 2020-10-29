import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar'
import Contact from "./Components/Contact/Contact";
import Footer from './Components/Footer/Footer'
import MainBody from './Components//MainPage/MainBody/MainBody';
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage';
import SignUp from './Components/LoginPage/SignUp';
import * as ROUTES from "./constants/routes";
import GiveAwayBody from './Components/GiveAwayPage/GiveAwayBody/GiveAwayBody'
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Route exact path={ROUTES.LANDING} component={MainBody} />
      <Route exact path="/give-away" component={GiveAwayBody} />
      <Route exact path={ROUTES.SIGN_IN} component={LoginPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      <Contact />
      <Footer />
    </HashRouter>
  );
}

export default App;
