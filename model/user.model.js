const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    }
});



module.exports  =  mongoose.model("User",UserSchema)
//users 
 