const asynchandler = require("express-async-handler")
const todo = require("../model/todomodule")

// get to-do
// route /todo/get:id
// private route

const gettodo = asynchandler(async(req, res) =>{
    const id = req.params.id
    const user_id = id
    const get = await todo.find({user_id})
    res.send(get)
})

// create to-do
// route /todo/post:id
// private route


const createtodo = asynchandler(async(req, res)=>{
    const id = req.params.id
    const data = req.body

    const create = await todo.create({
        user_id: id,
        todo : data.todo
    })

    res.send(create)
})

// get to-do
// route /todo/update:id
// private route

const updatetodo = asynchandler(async(req, res)=>{
    const id = req.params.id
    const data = req.body

    const update = await todo.updateOne({_id : id},{todo : data.todo})
    res.send(update)
})

const deletetodo = asynchandler(async(req, res)=>{
    const id = req.body._id
    
    const remove = await todo.deleteOne({_id : id})
    res.send(remove)
})



module.exports = { gettodo, createtodo, updatetodo, deletetodo }