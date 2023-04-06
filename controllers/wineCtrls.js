//wines
const db = require("../models")

//Route logic

const getWine = (req,res) => {
    // db.Wine.find({})
    res.send("getWine")
}

const createWine = (req,res) => {
    //db.Wine.create({name:"testing"})
    //.then((res)=> {console.log(res)})
    res.send("createWine")
}

module.exports = {
    getWine,
    createWine
}