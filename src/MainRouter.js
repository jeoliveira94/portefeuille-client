import React from "react";
import { Route, Switch } from "react-router-dom";

import Catalogo from "./pages/catalogo/Catalogo";
import MenuBar from "./pages/MenuBar";

export default function MainRouter() {
  return (
    <div style={{backgroundColor: "#eee"}}>
      <MenuBar/>
      <Switch>
        <Route path="/" component={Catalogo} />
      </Switch>
    </div>
  );
}
