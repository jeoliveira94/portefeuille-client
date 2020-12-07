import React from "react";
import { Route, Switch } from "react-router-dom";
import Cadastro from "./pages/cadastro/Cadastro";
import CadastroProjeto from "./pages/cadastro/CadastroProjeto";
import Catalogo from "./pages/catalogo/Catalogo";
import MenuBar from "./pages/MenuBar";
import Login from "./pages/login/Login";
import Perfil from "./pages/perfil/Perfil";
import Projeto from "./pages/perfil/ProjetoPerfil";

export default function MainRouter() {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <MenuBar />
      <Switch>
        <Route exact path="/cadastro" component={Cadastro} />
        <Route path="/cadastro/projeto" component={CadastroProjeto} />
        <Route exact path="/" component={Catalogo} />
        <Route path="/acesso" component={Login} />
        <Route path="/aluno/:matricula" component={Perfil} />
        <Route path="/projeto/:id" component={Projeto} />
      </Switch>
    </div>
  );
}
