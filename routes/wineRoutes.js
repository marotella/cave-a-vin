const router =require("express").Router()
const {wineCtrl} = require("../controllers")


//ROUTES:
// router.get("/seed", wineCtrl.seedData)
router.get("/", wineCtrl.getWine)
router.post("/new", wineCtrl.createWine)
router.put("/:id", wineCtrl.updateWine)
router.delete("/:id", wineCtrl.deleteWine)


module.exports= router;