const router =require("express").Router()
const {wineCtrl} = require("../controllers")


//ROUTES:
router.get("/", wineCtrl.getWine)
router.post("/", wineCtrl.createWine)

module.exports= router;