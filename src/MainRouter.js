import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cadastro from './pages/cadastro/Cadastro';

import Catalogo from './pages/catalogo/Catalogo';
import MenuBar from './pages/MenuBar';

export default function MainRouter() {
  return (
    <div style={{ backgroundColor: '#eee' }}>
      <MenuBar />
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/" component={Catalogo} />
      </Switch>
    </div>
  );
}
