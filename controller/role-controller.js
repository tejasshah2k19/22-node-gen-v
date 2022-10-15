const RoleModel = require("../model/role.model")


 exports.saveRole = function (req,res){
    let role = new RoleModel(req.body)

    role.save(function(err,success){
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
                msg: "Role save...",
                data: success
            })
        }
    })
}

 exports.getAllRoles = function (req, res) {

    RoleModel.find(function (err, success) {
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
                msg: "Role Ret...",
                data: success
            })
        }
    })
}

 exports.getRoleById = function (req, res) {
    let roleId = req.params.roleId
 
    RoleModel.findById(roleId, function (err, success) {
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
                msg: "Role Ret...",
                data: success
            })
        }
    });

}
 