const fs=require('fs')
fs.readFile('largefile.txt',(err,data)=>{
    if(err)
    console.log(err)
    console.log(`the size of data is ${data.length/1024}kb`)
})