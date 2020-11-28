import React from "react";
import { Route, Switch } from "react-router-dom";
import Cadastro from "./pages/cadastro/Cadastro";

import Catalogo from "./pages/catalogo/Catalogo";
import MenuBar from "./pages/MenuBar";
import Login from "./pages/login/Login";
import Perfil from "./pages/perfil/Perfil";

export default function MainRouter() {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <MenuBar />
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route exact path="/" component={Catalogo} />
        <Route path="/acesso" component={Login} />
        <Route path="/aluno/:matricula" component={Perfil} />
      </Switch>
    </div>
  );
}
