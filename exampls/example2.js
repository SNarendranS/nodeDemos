const http=require('http')
const server=http.createServer(function(request,response){
    if(request.url=='/') return responseText(request,response)
    if(request.url=='/json') return responseJson(request,response)
    responseNotFound(request,response)
})

function responseText(req,res){
    res.setHeader('Content-Type','text/plain')
    res.end('hii')
}

function responseJson(req,res){
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({'name':'naren','age':21,'numbers':[1,2,2]}))
}

function responseNotFound(req,res){
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.end('Requested response not found')
}
server.listen(8081)