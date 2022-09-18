let http = require("http") // inbuilt module 
 http.createServer(function(req,res){

    if(req.url == "/login"){
        res.write("login")
    }else if(req.url == "/signup"){
        res.write("signup") 
    }
    console.log(req.url);
    res.end() 

}).listen(9999)

// /   /welcome /login  /logout /signup 
//express