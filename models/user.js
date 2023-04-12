// Import the Mongoose library
const mongoose = require("mongoose");

// Mongoose schema 
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

// Create a Mongoose model based on the User schema
const User = mongoose.model("User", UserSchema);

// Export the User model from the module
module.exports = User;
