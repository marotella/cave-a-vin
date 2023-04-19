//Import mongoose
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

// Create a Mongoose model based on the user schema
const User = mongoose.model("User", UserSchema);

// Export the Wine model from the module
module.exports = User;
