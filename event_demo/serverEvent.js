const http=require('http')
var count=0
const server=http.createServer((request,response)=>{
    response.end('hello...')
})
server.on('connect',()=>{console.log('server connected')})
server.on('request',()=>{
    count++
    console.log('request received')
    console.log(`visitors count ${count}`)
})
server.listen(8000)


