const http=require('http')
const server=http.createServer(function(request,response){
    response.end('hello world')
})
server.listen(8080)


console.log(module)
console.log(console)
console.log(process)