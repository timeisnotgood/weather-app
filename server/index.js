const express = require("express")
const dotenv = require('dotenv')
const app = express()

const port = process.env.PORT || 5001
app.use(express.json())
app.use('/user', require("./routes/routes"))
// app.get('/users', (req, res)=>{
//     res.json({messa:"ok"})
// })

app.listen(port, (req, res)=>{
    console.log("Server Started !..", port);
})