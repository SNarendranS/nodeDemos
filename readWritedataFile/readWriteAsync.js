const{readFile,writeFile}=require('fs')
console.log('Reading the data from the file')
readFile('data1.js','utf-8',(error,data1)=>{
    if(error)
        console.log(error)
    console.log(data1)
readFile('data2.js','utf-8',(error,data2)=>{
    if(error)
        console.log(error)
    console.log(data2)

console.log('read completed')
writeFile('./dataAsync.txt',`user details ${data1} ${data2}`,{flag:'a'},(error)=>{if(error)console.log(error)
console.log('done writing')
})
})
})
writeFile('./dataAsync.txt','new data async run ',{flag:'a'},(error)=>{if(error)console.log(error)
    console.log('done writing 1')})