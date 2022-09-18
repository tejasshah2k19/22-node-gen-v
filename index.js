const express = require("express")
const res = require("express/lib/response")

let app = express() 



//urls

app.get("/",function(req,res){
    res.write("Welcome")
    res.end()  
})

app.get("/login",function(req,res){
    res.write("Login.........")
    res.end();
})
    
app.get("/signup",function(req,res){
    res.send("signup")
})



let port = 9999
app.listen(port,function(){
    console.log("server started..."+port);
})    