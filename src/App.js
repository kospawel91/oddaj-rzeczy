import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar'
import MainBody from './Components//MainPage/MainBody/MainBody';
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage';
import SignUp from './Components/LoginPage/SignUp';
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Route exact path="/" component={MainBody} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={SignUp} />
    </HashRouter>
  );
}

export default App;
