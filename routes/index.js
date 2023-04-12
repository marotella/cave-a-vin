
const router= require("express").Router()
const wineRoute = require("./wineRoutes")
const userRoute= require("./userRoutes")
//user 
const session = require('express-session')
const express = require("express")
const app = express()


  
router.use("/wines", wineRoute)
router.use("/register", userRoute)
module.exports = router
