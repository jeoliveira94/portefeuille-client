import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function Cadastro() {
  return (
    <div>
      <form>
        <ul>
          <li>
            <TextField label="Nome" variant="outlined" />
          </li>

          <li>
            <TextField label="Sobrenome" variant="outlined" />
          </li>

          <li>
            <TextField label="Matricula" type="number" variant="outlined" />
          </li>

          <li>
            <TextField
              label="Data de Nascimento"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </li>

          <li>
            <TextField label="Area" variant="outlined" />
          </li>

          <li>
            <TextField label="Habilidades" variant="outlined" />
          </li>

          <li>
            <Button variant="contained" color="primary">
              Cadastrar
            </Button>
          </li>
        </ul>
      </form>
    </div>
  );
}
