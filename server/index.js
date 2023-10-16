const express = require("express")

const app = express()
const port = 5000


app.use(express.json())

app.get("/data", (req, res)=>{
    res.json({message : "Get Method"})
})


app.post("/data", (req, res)=>{
    res.json({message : "Post Method"})
})



app.put("/data/:id", async(req, res)=>{
    const insert = await use.findByIdAndUpdate(id,{
        name,
        email,
        password
    },{new : true})
    res.status(200).json(insert)
})

app.delete("/data/:id", async(req, res)=>{
    const delet = await use.deleteOne({_id : id})
    if(delet){
        res.status(200).json({message:`The Deleted contact is ${req.params.id}`})
    }
})



app.listen( port, (req, res)=>{
    console.log("server started !...");
})




// const express = require("express")
// const dotenv = require('dotenv')
// const cors = require('cors')
// const app = express()
// const db = require("./lib/db")


// const port = process.env.PORT || 5001
// app.use(cors())
// app.use(express.json())
// app.use('/user', require("./routes/routes"))

// db()

// if (db) {
//     app.listen(port, (req, res)=>{
//         console.log("Server Started !..", port);
//     })   
// }

