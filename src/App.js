import React from 'react';
import './App.css';
import CatalogoCard from './components/CatalogoCard';

function App() {
  return (
    <div className="App">
      <CatalogoCard
        nome="Eduardo 'Ruemmai' Oliveira"
        area="Back end"
        imagem="https://avatars3.githubusercontent.com/u/26828695?s=400&u=5f0b619d8f68858f574e2d7b84b2f7341f21abb7&v=4"
      ></CatalogoCard>
      <CatalogoCard
        nome="Weverton 'Vvt' Trindade"
        area="Front End"
        imagem="https://avatars1.githubusercontent.com/u/19598108?s=400&u=21e4d50f0c7de9b1a6a440f6387d455db94de930&v=4"
      ></CatalogoCard>
      <CatalogoCard
        nome="Pedro 'Psy' Carvalho"
        area="DBA"
        imagem="https://avatars2.githubusercontent.com/u/17572104?s=400&u=07e2c9d2ec2b666fe21c05515abf961113b605b1&v=4"
      ></CatalogoCard>
    </div>
  );
}

export default App;
