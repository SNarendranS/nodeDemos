const EventEmitter=require('events')
const event=new EventEmitter();
event.on('click',()=>{
    console.log('click event occured..... !')
})
event.emit('click')