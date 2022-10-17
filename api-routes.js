var router = require("express").Router()

const SessionController = require("./controller/session-controller")
const UserController = require("./controller/user-controller")
const RoleController = require("./controller/role-controller")



//urls 
router.post("/signup",SessionController.signup)
router.get("/users",UserController.getAllUsers)
router.get("/users/:userId",UserController.getUserById) 
router.post("/users",UserController.getUserByEmail)
router.get("/admins",UserController.getAllAdmins)
router.post("/admin",UserController.addAdmin)
router.get("/customers",UserController.getAllCustomers)


router.post("/role",RoleController.saveRole)
router.get("/role/:roleId",RoleController.getRoleById)
router.get("/roles",RoleController.getAllRoles)


module.exports = router 
