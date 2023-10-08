const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    username : {
        type : String,
        require :[true, "Name is mandatory"]
    },
    email : {
        type :String,
        require : [true, "email is mandatory"]
    },
    password : {
        type : String,
        require :[true, "Password id Mandatory"]
    }
})

module.exports = mongoose.model("use", userschema)