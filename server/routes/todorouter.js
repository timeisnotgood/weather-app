const express = require("express")
const bodyParser = require("body-parser")
const {gettodo, createtodo, updatetodo, deletetodo} = require("../controller/todocontroller")
const router = express.Router()


router.use(bodyParser.json());
router.get('/get/:id', gettodo)
router.post('/create/:id', createtodo)
router.put('/update', updatetodo)
router.delete('/delete', deletetodo)

module.exports = router