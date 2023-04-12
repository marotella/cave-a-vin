//Import mongoose
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

// Create a Mongoose model based on the user schema
const Wine = mongoose.model("User", UserSchema);

// Export the Wine model from the module
module.exports = User;
