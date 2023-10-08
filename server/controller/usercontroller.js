const asynchandler = require("express-async-handler")
const use = require("../model/usermodule")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

// @ get allusers
// @ /users/
// @ private

const registeruser = asynchandler(async(req, res)=>{
    const {username, email, password} = req.body
    if(!username || !email || !password){
        res.status(404).send("All fields are Mandatory !..")
    }
    const hashed = await bcrypt.hash(password, 10)
    const data = await use.create({
        username,
        email,
        password : hashed
    })
    res.status(200).json(data)
})

// @ post users
// @ /users/
// @ private

const loginuser = asynchandler(async(req, res)=>{
    const {email, password} = req.body
    if(!email || !password){
        res.status(404).send("All fields are Mandatory !..")
    }

    const filter = await use.find({email})
    console.log(filter[0].username);
    const token = await jwt.sign({
        user :{
            username : filter[0].username,
            email : filter[0].email,
            id : filter[0]._id
        },
    }, "worst123",{expiresIn : "10m"})

    res.status(200).json({"accesstoken" :token})
})

// @ get singleusers
// @ /users/
// @ private

const currentuser = asynchandler(async(req, res)=>{
    res.status(200).json({message  : " get Contacts"})
})



module.exports = {registeruser, loginuser, currentuser}