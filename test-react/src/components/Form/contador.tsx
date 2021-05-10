import React, {useState} from 'react'
import './contador.css'
interface iDados{
  texto: string;
}
export const Contador:React.FC<iDados> = (props) =>{

  const [texto,setTexto] = useState(props.texto)
  const [numero,setNumero] = useState(0)
  function somar(){
    setNumero(numero +1);
  }
  function subtrair(){
    setNumero(numero -1);
  }
  return(
      <div className="contador">
        <h1>{texto}</h1>
        <input type="text" onChange={(e)=> setTexto(e.target.value)}/>
        <h1>Valor:{numero}</h1>
       
        <input type="number" name="" id="" onChange={(e)=>setNumero(Number(e.target.value))}/>
        <div>
        <button type="button" onClick={somar}> ++ </button>
        <button type="button" onClick={subtrair}> -- </button>
        </div>
      </div>
  )

}