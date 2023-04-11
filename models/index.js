//index
require("dotenv").config()
const { application } = require("express")

//user 
const session = require('express-session')
const express = require("express")
const app = express()


const SESSION_SECRET = process.env.SESSION_SECRET
console.log('here is the session', SESSION_SECRET)

app.use(session({
    secret:SESSION_SECRET,
    resave:false,
    saveUninitialized: false
}))
app.get('/any', (req, res) => {
    req.session.anyProperty = 'any value'
  })

  app.get('/retrieve', (req, res) => {
    if (req.session.anyProperty === 'something you want it to') {
      console.log('it matches! cool')
    } else {
      console.log('nope, not a match')
    }
    res.redirect('/')
  })
  
  app.get('/update', (req, res) => {
    req.session.anyProperty = 'changing anyProperty to this value'
    res.redirect('/')
  })
  
  app.get('/destroy-route', () => {
    req.session.destroy(err => {
      if (err) {
      } else {
      }
    })
    res.redirect('/')
  })
  
//end of user 


const mongoose = require("mongoose")
const DATABASE_URL = process.env.DATABASE_URL
mongoose.set('strictQuery', true);


mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
const db = mongoose.connection
db.on("open", () => console.log("Your are connected to mongoose"))
db.on("close", () => console.log("Your are disconnected from mongoose"))
db.on("error", (error) => console.log(error));


module.exports = {
    Wine: require('./wine')
}