//index
require("dotenv").config()
const mongoose = require("mongoose")
const DATABASE_URL = process.env.DATABASE_URL
mongoose.set('strictQuery', true);


mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
const db = mongoose.connection
db.on("open", () => console.log("Your are connected to mongoose"))
db.on("close", () => console.log("Your are disconnected from mongoose"))
db.on("error", (error) => console.log(error));