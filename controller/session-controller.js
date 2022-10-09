const validator = require("validator")
const UserModel = require("../model/user.model")



function signup(req, res) {
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let lastName = req.body.lastName
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
            "password":password
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
                    msg: "Signup done...",
                    status: 200,
                    data: success
                })
            }
        })
    }
}

module.exports.signup = signup 