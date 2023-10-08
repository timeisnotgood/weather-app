const asynchandler = require("express-async-handler")

// @ get allusers
// @ /users/
// @ private

const registeruser = asynchandler(async(req, res)=>{
    res.status(200).json({message  : " all Contacts"})
})

// @ post users
// @ /users/
// @ private

const loginuser = asynchandler(async(req, res)=>{
    res.status(200).json({message  : " post Contacts"})
})

// @ get singleusers
// @ /users/
// @ private

const currentuser = asynchandler(async(req, res)=>{
    res.status(200).json({message  : " get Contacts"})
})



module.exports = {registeruser, loginuser, currentuser}