const validator = require("validator")

function signup(req, res) {
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let errors = {}
    let isError = false

    //validation 
    if ( firstName == undefined || validator.isEmpty(firstName)) {
        isError = true
        errors.firstNameError = "Please Enter FirstName"
    }

    //duplication check 

    //store into db 

    //response 
    if (isError) {
        res.json({
            status: -1,
            data: req.body,
            err: errors,
            msg: "Please Correct Error(s)"
        })
    } else {
        res.json({
            msg: "Signup done...",
            status: 200,
            data: req.body
        })
    }
}

module.exports.signup = signup 