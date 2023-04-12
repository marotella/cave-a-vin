
const db = require("../models")
const User = require("../models/user")
console.log(db)
const bcrypt = require("bcrypt") //this allows us to encrypt user information for secuirty purposes

User.find({})
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.error(err);
  });


//Create -  This route creates a new user, encrypts some data and confirms that the email is unique.
const register = (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    console.log(req.body)

    User.findOne({email: req.body.email})
      .then((userExists) => {
        if (userExists) {
          res.send("That email already exists."); // consider revising to flash a message and redirect to the page.
        } else {
          User.create(req.body).then((createdUser) => {
            console.log(createdUser);
            req.session.currentUser = createdUser;
            res.redirect("/wines");
          });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Server Error");
      });
  };

//This route creates the session for the user once they log in that can be used to access the ability to create, delete, and update wines. 
const signin = async (req, res) => {
    const foundUser = await User.findOne({ email: req.body.email }).exec();
  
    if (foundUser) {
      const validLogin = bcrypt.compareSync(req.body.password, foundUser.password);
      if (validLogin) {
        req.session.currentUser = foundUser;
        console.log(foundUser)
        res.redirect("/wines");
      } else {
        res.send("Invalid email and/or password.");
      }
    } else {
      res.send("Invalid email and/or password.");
    }
  };

  //This route ends the session for the user and signs them out of the account. It directs them back to the homepage.
const signout = async (req, res)=>{
  req.session.destroy()
  res.redirect("/") //redirect back to the homepage
}
  
  module.exports = {
    register,
    signin,
    signout
  };