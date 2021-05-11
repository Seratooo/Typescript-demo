import {EventEmitter} from 'events'
import fs from 'fs'
import path from 'path'

const emitter = new EventEmitter()

emitter.on('log',(message)=>
  fs.appendFile(path.join(__dirname,'looger.txt'),message,(err)=>{
      if(err) throw err}
    )
)

emitter.emit('log',"Minha Mensagem")