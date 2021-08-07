// import http from "http";
const http = require("http");

const server = http.createServer((request,response)=>{
    console.log("api is invoked");
    if(request.url === "/a") {
        response.end("url a is invoked");
    }
    else if(request.url === "/b") {
        response.end("url b is invoked");
    }
    else {
        response.end("this url is unknown");
    }
});
server.listen(8000,()=>{
    console.log('normal nodejs server started using port 8000')
})