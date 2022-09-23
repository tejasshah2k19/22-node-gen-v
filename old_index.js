const express = require("express")
const res = require("express/lib/response")

let app = express() 


//middle ware 
app.use(express.json())//body 
app.use(express.urlencoded({extended:true}))//body 


//@RequestBody -> json 

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

app.post("/calc",function(req,res){
    console.log(req.body); 
    let n1 = req.body.n1//numeric - string  
    let n2 = req.body.n2 
    let ans = n1 + n2 
      
    res.json({status:200,msg:"addition done",data:ans})
})


let port = 9999
app.listen(port,function(){
    console.log("server started..."+port);
})    