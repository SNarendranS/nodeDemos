const fs=require('fs')
// const data=fs.readFileSync('C:/nodeProjects/areaModules/moduleDemo.js','utf-8')

const data=fs.readFile('C:/nodeProjects/areaModules/moduleDemo.js','utf-8',(error,data)=>{
    if(error)
        console.log(error)
    console.log(data)    
})


console.log(data)
for(var i=0;i<100;i++)
    console.log(i)