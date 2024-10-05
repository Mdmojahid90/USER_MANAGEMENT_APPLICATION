const express = require("express")
const router = express.Router()

const contactController = require("../controllers/contact-controller")
const {contact} = require("../validations/auth-validation")
const authValidate= require("../middlewares/auth-validate")

router.route("/contact").post(authValidate(contact),contactController.contactForm)

module.exports=router