//Dependencies
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose');
const db = mongoose.connection;
//Objects/Variables


const app = express()
const routes = require("./routes/index")
const MONGODB_URI = process.env.MONGODB_URI
console.log(MONGODB_URI)
// connect to MongoDB Atlas database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.log('Error connecting to MongoDB Atlas:', err);
});


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