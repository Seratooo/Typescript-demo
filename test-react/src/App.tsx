import React from 'react'
import { Corpo } from './components/corpo'
import Header from './components/header'
import { Teste } from './components/teste'
export default () =>     
      <div>
        <Header titulo="Abubacar Correia"/>
        <Corpo texto="Isto é um exemplo de textos"></Corpo>
        <Teste numero={10}/>
        <Teste numero={5}/>
      </div>