const asynchandler = require("express-async-handler")
const todo = require("../model/todomodule")

const gettodo = asynchandler(async(req, res) =>{
    const id = req.params.id
    const user_id = id
    const get = await todo.find({user_id})
    res.send(get)
})

const createtodo = asynchandler(async(req, res)=>{
    const id = req.params.id
    const data = req.body

    const create = await todo.create({
        user_id: id,
        todo : data.todo
    })

    res.send(create)
    console.log(id, data.todo);
})


module.exports = { gettodo, createtodo }