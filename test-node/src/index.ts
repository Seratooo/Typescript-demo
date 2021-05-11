import os from 'os'

setInterval(()=>{
  const {freemem,totalmem} = os
  const total = Number(totalmem() /1024 /1024)
  const men = Number(freemem() /1024 /1024)
  const percents = Number((men/total)*100)

  const status = {
    free: `${men} Mb`,
    total: `${total} Mb`,
    usage: `${percents}%`
  }

  console.clear()
  console.table(status)
},1000)