const express = require("express")

const sessionController = require("./controller/session-controller")


let app = express() 

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//urls 

app.post("/signup",sessionController.signup)


let port = 9999 

app.listen(port,function(){
    console.log("Server started ... "+port);
})