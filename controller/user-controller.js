const UserModel = require("../model/user.model")


function getAllUsers(req, res) {

    UserModel.find(function (err, success) {
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
module.exports.getAllUsers = getAllUsers
module.exports.getUserById = getUserById
module.exports.getUserByEmail = getUserByEmail 