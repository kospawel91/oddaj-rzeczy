import React from 'react';
import { Switch, Route } from "react-router-dom";
import MainBody from "./Components//MainPage/MainBody/MainBody";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUp from "./Components/LoginPage/SignUp";
import * as ROUTES from "./constants/routes";
import GiveAwayBody from "./Components/GiveAwayPage/GiveAwayBody/GiveAwayBody";

const Routes = () => {
    return (
      <Switch>
        <Route exact path={ROUTES.LANDING} component={MainBody} />
        <Route exact path={ROUTES.GIVE_AWAY} component={GiveAwayBody} />
        <Route exact path={ROUTES.SIGN_IN} component={LoginPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      </Switch>
    );
};

export default Routes;