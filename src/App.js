import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import UserRoute from "routes/UserRoute";
import GuestRoute from "routes/GuestRoute";

import 'assets/css/font-awesome.min.css';
import 'assets/css/style.css';
import 'assets/css/font.css';
import 'assets/css/common.css';
import 'assets/css/bootstrap.min.css';
import 'assets/css/elisyam-1.2.min.css';

import LoginPage from "components/pages/auth/login/LoginPage";
import RegisterPage from "components/pages/auth/register/RegisterPage";
import LandingPage from "components/pages/LandingPage";
import FileImportPage from "components/pages/FileImportPage";
import DailySalesReport from "components/pages/reports/DailySalesReport";
import DailyStockReport from "components/pages/reports/DailyStockReport";
import SalesForecast from "components/pages/reports/SalesForecast";
import SalesTargetActual from "components/pages/reports/SalesTargetActual";
import VanLoadingSlip from "components/pages/reports/VanLoadingSlip";
import NoMatchPage from "components/pages/NoMatchPage";

const App = ({ location }) => (
    <div>
      <Switch>
        //======================Guest-Route=====================================//
        <GuestRoute location={location} path="/" exact component={LoginPage} />
        <GuestRoute location={location} path="/register" exact component={RegisterPage} />
        //======================User-Route=====================================//
        <UserRoute location={location} path="/dashboard" exact component={LandingPage} />
        <UserRoute location={location} path="/dailySalesReport" exact component={DailySalesReport} />
        <UserRoute location={location} path="/dailyStockReport" exact component={DailyStockReport} />
        <UserRoute location={location} path="/salesForecast" exact component={SalesForecast} />
        <UserRoute location={location} path="/salesTargetActual" exact component={SalesTargetActual} />
        <UserRoute location={location} path="/vanLoadingSlip" exact component={VanLoadingSlip} />
        <UserRoute location={location} path="/file" exact component={FileImportPage} />
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
