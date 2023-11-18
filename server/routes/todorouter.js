const express = require("express")
const bodyParser = require("body-parser")
const {gettodo} = require("../controller/todocontroller")
const router = express.Router()


router.use(bodyParser.json());
router.get('/:id', gettodo)
// router.post()
// router.put()
// router.delete()

module.exports = router