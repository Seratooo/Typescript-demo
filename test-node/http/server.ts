import http from 'http'

http.createServer((req,res)=>{
  res.write('Hello Word')
  res.end()
}).listen(5000)