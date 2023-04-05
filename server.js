//Dependencies
const express = require("express")
const cors = require("cors")

//Objects/Variables
const app = express()

//Middleware
app.use(cors())

//Routes

//HOME Route:
app.get("/", (req, res)=>{
    res.send("Hey!")
})

//Index Route:
app.get("/wines", (req, res) => {
    res.send("winelist")
}
)

//PORT
const PORT = process.env.PORT || 4000

//Listener
app.listen(PORT, ()=> {
    console.log("Server listening on "+ PORT)
})