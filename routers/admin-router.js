const express = require("express")
const router = express.Router()

const adminController = require("../controllers/admin-controller")
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers)
router.route("/user/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUserById)
router.route("/user/:id").get(authMiddleware,adminMiddleware,adminController.getUserById)
router.route("/user/update/:id").patch(authMiddleware,adminMiddleware,adminController.updateUserById)




module.exports=router