const express = require("express")
const router = express.Router()
const {registeruser, loginuser, currentuser} = require('../controller/usercontroller')

router.post('/registeruser', registeruser )
router.post("/login", loginuser )
router.get("/current", currentuser)

module.exports = router