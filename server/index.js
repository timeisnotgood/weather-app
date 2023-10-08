const express = require("express")
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const db = require("./lib/db")


const port = process.env.PORT || 5001
app.use(cors())
app.use(express.json())
app.use('/user', require("./routes/routes"))

db()

if (db) {
    app.listen(port, (req, res)=>{
        console.log("Server Started !..", port);
    })   
}