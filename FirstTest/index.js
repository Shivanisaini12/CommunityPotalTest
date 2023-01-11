const express = require('express');
const app = express();
const port = 3000;

app.get("/test",(req,res)=>{

    res.status(200).json({
        Ok:"Server is up"
    })
})

app.listen(port,()=>console.log("Server up on port",port));