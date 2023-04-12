const router =require("express").Router()
const {userCtrl} = require("../controllers")

//ROUTES:
router.get("/")  ///form to login or register
router.post("/signin", userCtrl.signin) //route to login after accessing the form page should be linked to the sign in button.
router.post("/", userCtrl.register) //route to create a new account
router.get("/signout") //route to logout
module.exports= router;