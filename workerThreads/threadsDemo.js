const {Worker, isMainThread, parentPort, workerData} = require('worker_threads')

if(isMainThread){
    const worker=new Worker(__filename,{
        workerData:{number:5}
    })
    worker.on('message',result=>{
        console.log(`Factorial result: ${result}`)
    })
    worker.on('error',(err)=>{
        console.error(err)
    })
    worker.on('exit',code=>{
        if(code!=0){
            console.error(`worker stopped with exit code ${code}`)
        }
    })
}
else{
    function calculateFactorial(n){
        if(n===0||n===1)
            return 1
        else{
            return n*calculateFactorial(n-1)
        }
    }
}

const {number}=workerData
const result=calculateFactorial(number)
parentPort.postMessage(result)