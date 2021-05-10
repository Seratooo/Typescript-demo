import React from 'react'
import './corpo.css'
interface iDados{
  texto: string;
}

export const Corpo:React.FC<iDados> = (props) =>
      <div className="corpo">
        {props.texto}
      </div>
