const router =require("express").Router()
const {wineCtrl} = require("../controllers")

//ROUTES:
router.get("/", wineCtrl.getWine) //Pulls in the wine data for the index page
router.post("/:id", wineCtrl.createWine) //shows data for a specific wine
router.put("/:id", wineCtrl.updateWine) //allows the user to update the data for the wine
router.delete("/:id", wineCtrl.deleteWine) //removes a wine from the data set


module.exports= router;