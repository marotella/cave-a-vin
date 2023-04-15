const router =require("express").Router()
const {wineCtrl} = require("../controllers")


//ROUTES:
router.get("/", wineCtrl.getWine)
router.post("/", wineCtrl.createWine)
router.put("/:id", wineCtrl.updateWine)
router.delete("/:id", wineCtrl.deleteWine)
// router.get("/:id", wineCtrl.getWineById)

module.exports= router;