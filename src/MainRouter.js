import React from "react";
import { Route, Switch } from "react-router-dom";

import Catalogo from "./pages/catalogo/Catalogo";
import Login from "./pages/login/Login";
import MenuBar from "./pages/MenuBar";

export default function MainRouter() {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Catalogo} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}
