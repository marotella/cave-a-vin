//wines
const db = require("../models")
console.log(db)
//Route logic


//Get Index Route
const getWine = (req,res) => {
    db.Wine.find({})
    .then((foundWine) =>{
        if(!foundWine){
            res.status(404).json({message: "Cannot find wine."})
        }else{
            res.status(200).json({data: foundPeople})
        }
    })
    
}


//Post Create Route
const createWine = (req,res) => {
    db.Wine.create({name:"testing"})
    .then((res)=> {console.log(res)})
    res.send("createWine")
}

//Post Update Route


//Delete Route


module.exports = {
    getWine,
    createWine
}