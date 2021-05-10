import React from 'react'
import { Corpo } from './components/corpo'
import { Contador } from './components/Form/contador'
import Header from './components/header'
import { Teste } from './components/teste'
const App = () =>     
      <div>
        <Header titulo="Abubacar Correia"/>
        <Corpo texto="Isto é um exemplo de textos"></Corpo>
        <Teste numero={10}/>
        <Contador texto="Hello Word"></Contador>
      </div>
  
  export default App