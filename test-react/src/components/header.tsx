import React from 'react'
import './header.css'

interface iDados{
  titulo: string;
}

const Header:React.FC<iDados> = (props) =>
    <header className="Header">
      <div className="content">
        <h1>{props.titulo}</h1>
        <ul className="lista">
          <li className="List"><p>Sobre mim</p></li>
          <li className="List">Habilidades</li>
          <li className="List">Formação</li>
          <li className="List">Portfolio</li>
          <li className="List">Contacta-me</li>
        </ul>
      </div>
    </header>

    export default Header;