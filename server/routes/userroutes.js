const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser");
const {registeruser, loginuser, currentuser} = require('../controller/usercontroller')

router.use(bodyParser.json());
router.post('/register', registeruser )
router.post("/login", loginuser )
router.get("/current", currentuser)

module.exports = router