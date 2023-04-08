// Import the Mongoose library
const mongoose = require("mongoose");

// Mongoose schema 
const WineSchema = new mongoose.Schema({
    winery: String,
    wine: String,
    rating: {
        average: String,
        reviews: String,
    },
    location: String,
    image: String,
    id: Number,
});

// Create a Mongoose model based on the Wine schema
const Wine = mongoose.model("Wine", WineSchema);

// Export the Wine model from the module
module.exports = Wine;
