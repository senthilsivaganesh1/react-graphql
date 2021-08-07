const express = require("express");

const app = express();

const router = express.Router();

// app.use(express.json());
app.use(router);
const json = {"name":"ABC"};

router.get("/a",(request, response)=>{
    // response.setHeader("Content-Type", "application/json");
    response.send(json);
})

router.get("/a",(request,response)=>{
    response.send("url b is invoked")
})

app.listen(8000,()=>{
    console.log('express server started at 8000')
});