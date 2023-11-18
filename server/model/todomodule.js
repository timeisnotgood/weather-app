const mongoose = require("mongoose")

const todoschema = mongoose.Schema({
    user_id : {
        type : Number,
        require : [true, "Id is mandatory to store a to-do"]
    },
    todo : {
        type : String,
        require : [true, "todo cant be empty"]
    }
})

module.exports = mongoose.model('todo', todoschema)