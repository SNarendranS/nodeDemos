const calculator=(value)=>{
    return new Promise((resolve,reject)=>{
        if(value)
            resolve(value+2)
        else
            reject('data is undefined')
    })
}

// calculator().then((data)=>console.log(data)).catch((error)=>console.log(error)) //method 1

const asyncFunc=async ()=>{                 //method 2
    try{
        const data=await calculator(2)
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

asyncFunc()