
const router= require("express").Router()
const wineRoute = require("./wineRoutes")
// const userRoute= require("./userRoutes")
//user 

router.use("/wines", wineRoute)
// router.use("/register", userRoute)
module.exports = router
