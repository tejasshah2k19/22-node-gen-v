const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const router = require("./api-routes")

let app = express() 

//middleware 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//urls
app.use("/api",router)


 


let port = 9999 

mongoose.connect('mongodb://localhost:27017/nodegenv',function(){
    console.log("db connected......");
})

app.listen(port,function(){
    console.log("Server started ... "+port);
})