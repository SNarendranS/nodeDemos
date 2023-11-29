console.log('start')
const id=setInterval(()=>{console.log('hello')},2000)
setTimeout(()=>{
    clearInterval(id)
    console.log('setIntervel callback')},5000)
console.log('end')