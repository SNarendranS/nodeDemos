const {readFile}=require('fs').promises

// // fs.readFile('largefile.txt',(err,data)=>{
// //     if(err)
// //     console.log(err)
// //     console.log(`the size of data is ${data.length/1024}kb`)                                                   //refer streams readLargeFile
// })


const fetchData=async()=>{
    try{
        const data1=await readFile('C:/nodeProjects/streams/largefile.txt','utf-8')
        const data2=await readFile('C:/nodeProjects/streams/writeLargeData.js','utf-8')

        console.log(data1,data2)
    }
    catch(error){
        console.log(error)
    }
}

fetchData()