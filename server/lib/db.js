const mongoose = require("mongoose")

const db = async() =>{
    const connection = await mongoose.connect(`mongodb://127.0.0.1:27017`)
    if(connection){
        console.log({"Host" :mongoose.connection.host, "Name": mongoose.connection.name});
    }
}

module.exports = db