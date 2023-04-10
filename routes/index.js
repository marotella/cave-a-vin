
const router= require("express").Router()
const wineRoute = require("./wineRoutes")

router.use("/wines", wineRoute)

module.exports = router
