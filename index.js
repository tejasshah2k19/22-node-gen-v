const express = require("express")
const mongoose = require('mongoose')

const sessionController = require("./controller/session-controller")


let app = express() 

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//urls 

app.post("/signup",sessionController.signup)


let port = 9999 

mongoose.connect('mongodb://localhost:27017/nodegenv',function(){
    console.log("db connected......");
})

app.listen(port,function(){
    console.log("Server started ... "+port);
})