import "./App.css";
import React from "react"
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home.jsx"
import Profile from "./views/Profile.jsx"

function App() {
  return <div className="App">
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/profile" component={Profile} ></Route>
      <Route component={Home}></Route>
    </Switch>
  </div>;
}

export default App;
