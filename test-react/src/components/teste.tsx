import React from 'react'

interface iDados{
  numero: number;
}

export const Teste:React.FC<iDados> = (PROPS) =>
      <div className="content">
        {PROPS.numero > 9?
          <h1>Você Aprovou com:  {PROPS.numero}</h1>
          : <h1>Você Reprovou com:  {PROPS.numero}</h1>
        }
      </div>