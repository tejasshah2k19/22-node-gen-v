const UserModel = require("../model/user.model")


function getAllUsers(req, res) {

    UserModel.find().populate("role").exec(function (err, success) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime"
            })
        } else {
            res.json({
                status: 200,
                msg: "User Ret...",
                data: success
            })
        }
    })
}

function getAllCustomers(req, res) {

    UserModel.find({"role":"634a993e739c8cc42db5ab45"}).populate("role").exec(function (err, success) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime"
            })
        } else {
            res.json({
                status: 200,
                msg: "User Ret...",
                data: success
            })
        }
    })
}

function getUserById(req, res) {
    let userId = req.params.userId
    console.log(userId);
    UserModel.findById(userId, function (err, success) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime"
            })
        } else {
            res.json({
                status: 200,
                msg: "User Ret...",
                data: success
            })
        }
    });

}

function getUserByEmail(req, res) {

    let email = req.body.email

    UserModel.findOne({ "email": email }, function (err, success) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime"
            })
        } else {
            if (success) {
                res.json({
                    status: 200,
                    msg: "User Ret...",
                    data: success
                })
            }else{
                res.json({
                    status: -1,
                    msg: "Invalid Email",
                    data: req.body
                })

            }
        }
    })

}

function getAllAdmins(req,res){
    UserModel.find({"role":"634a992a739c8cc42db5ab43"},function(err,success){
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime"
            })
        } else {
            res.json({
                status: 200,
                msg: "Admin Ret...",
                data: success
            })
        }
    })

}

function addAdmin(req, res) {
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let lastName = req.body.lastName
    let role = "634a992a739c8cc42db5ab43" //req.body.role 
    let errors = {}
    let isError = false

    //validation 
    if (firstName == undefined || validator.isEmpty(firstName)) {
        isError = true
        errors.firstNameError = "Please Enter FirstName"
    }


    //duplication check 



    //response 

    if (isError) {
        res.json({
            status: -1,
            data: req.body,
            err: errors,
            msg: "Please Correct Error(s)"
        })
    } else {
        //store into db 

        let user = new UserModel({
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "password":password,
            "role":role
        })
        user.save(function (err, success) {
            if (err) {

                res.json({
                    msg: "SMW",
                    status: -1,
                    data: req.body
                })
            } else {

                res.json({
                    msg: "admin added..",
                    status: 200,
                    data: success
                })
            }
        })
    }
}

module.exports.getAllUsers = getAllUsers
module.exports.getUserById = getUserById
module.exports.getUserByEmail = getUserByEmail 
module.exports.getAllAdmins = getAllAdmins
module.exports.addAdmin = addAdmin
module.exports.getAllCustomers = getAllCustomers