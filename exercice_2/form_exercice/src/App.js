import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Profile from "./views/Profile.jsx";

import { AppContainer } from "./styles/Container.style";

function App() {
  return (
    <AppContainer>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/profil" component={Profile}></Route>
        <Route component={Home}></Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
