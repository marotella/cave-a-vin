//Dependencies
require("dotenv").config()
const express = require("express")
const cors = require("cors")

//Objects/Variables
const app = express()
const routes = require("./routes/index")
//Middleware
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parse json bodies
//Routes
app.use("/", routes)


//catch non-routes
app.use((req,res)=> {
    res.status(404).json({message: "Not a proper route"})
})

//PORT
const PORT = process.env.PORT || 4000

//Listener
app.listen(PORT, ()=> {
    console.log("Server listening on "+ PORT)
})