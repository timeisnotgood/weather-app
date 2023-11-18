const asynchandler = require("express-async-handler")
const todo = require("../model/todomodule")

const gettodo = asynchandler(async(req, res) =>{
    const id = req.params.id
    console.log(id);
})


module.exports = { gettodo }