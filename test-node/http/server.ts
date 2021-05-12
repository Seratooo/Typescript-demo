import http from 'http'
import data from './dados.json'
import fs from 'fs'
import path from 'path'
import URL from 'url'

function writeOnFile(cb:Function){
    fs.writeFile(
        path.join(__dirname,"dados.json"),
        JSON.stringify(data,null,2),
        err => {
        if(err) throw err

        cb(JSON.stringify({message: "Ok"}))
    })
}

http.createServer((req,res)=>{
    console.log(URL.URL)

}).listen(5000)