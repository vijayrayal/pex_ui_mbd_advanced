import React from "react";
import "./App.css";
import RoutesWithNavigation from "./components/RoutesWithNavigation";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <RoutesWithNavigation />
      </Switch>
    </div>
  );
}

export default App;
