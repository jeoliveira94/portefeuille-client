import React from 'react';
import './style.css';

function CatalogoCard(props) {
  return (
    <div className="rounded-card">
      <ul>
        <li>
          <img src={props.imagem} alt={props.nome} className="circle-avatar" />
        </li>
        <li>
          <span>{props.nome}</span>
        </li>
        <li>
          <span className="area">{props.area}</span>
        </li>
      </ul>
    </div>
  );
}

export default CatalogoCard;
