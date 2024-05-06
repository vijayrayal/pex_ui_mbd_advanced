import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoard from "./DashBoard/Dashboard";
import Login from "./Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
                      
      </Switch>
    );
  }
}
export default Routes;
