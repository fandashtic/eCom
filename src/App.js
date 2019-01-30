import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import UserRoute from "routes/UserRoute";
import GuestRoute from "routes/GuestRoute";

import 'assets/css/font-awesome.min.css';
import 'assets/css/style.css';
import 'assets/css/font.css';
import 'assets/css/common.css';

import LoginPage from "components/pages/auth/login/LoginPage";
import RegisterPage from "components/pages/auth/register/RegisterPage";
import LandingPage from "components/pages/LandingPage";
import NoMatchPage from "components/pages/NoMatchPage";

const App = ({ location }) => (
    <div>
      <Switch>
        //======================Guest-Route=====================================//
        <GuestRoute location={location} path="/" exact component={LoginPage} />
        <GuestRoute location={location} path="/register" exact component={RegisterPage} />
        //======================User-Route=====================================//
        <UserRoute location={location} path="/dashboard" exact component={LandingPage} />
        <Route location={location} component={NoMatchPage} />
      </Switch>
    </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
