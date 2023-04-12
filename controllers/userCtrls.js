
const db = require("../models")
const User = require("../models/user")
console.log(db)
const bcrypt = require("bcrypt") //this allows us to encrypt user information for secuirty purposes

//Route logic
const SESSION_SECRET = process.env.SESSION_SECRET
console.log('here is the session', SESSION_SECRET)


//Create -  This route creates a new user, encrypts some data and confirms that the email is unique.



const register = (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    console.log(req.body)
    User.findOne({email: req.body.email}, (err,userExists)=> {
        if(userExists){
            res.send("That email already exists.")  // consider revising to flash a message and redirect to the page.
        }else {
            User.create(req.body, (err, createdUser)=>{
                console.log(createdUser)
                req.session.currentUser = createdUser
                res.redirect("/wines")
            })
        }
    })
}


//This route creates the session for the user once they log in that can be used to access different levels of the account.
const signin = async (req, res) => {
    const foundUser = await User.findOne({ email: req.body.email }).exec();
  
    if (foundUser) {
      const validLogin = bcrypt.compareSync(req.body.password, foundUser.password);
      if (validLogin) {
        req.session.currentUser = foundUser;
        res.redirect("/wines");
      } else {
        res.send("Invalid username and/or password.");
      }
    } else {
      res.send("Invalid username and/or password.");
    }
  };
  
  module.exports = {
    register,
    signin
  };