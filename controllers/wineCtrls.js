//wines
const db = require("../models")
const wine = require("../models/wine")
console.log(db)
//Route logic


//Get Index Route
const getWine = (req,res) => {
    db.Wine.find({})
    .then((foundWine) =>{
        if(!foundWine){
            res.status(404).json({message: "Cannot find wine."})
        }else{
            res.status(200).json({data: foundWine})
        }
    })
}

// New Route
const getWineById = (req, res) => {
    db.Wine.findById(req.params.id)
    .then((foundWine) => {
        if(!foundWine) {
            res.status(404).json({message: "Cannot find wine"})
        } else {
            res.status(200).json({ data: foundWine})
        }
    })
}

//Post Create Route
const createWine = (req,res) => {
    db.Wine.create(req.body)
    .then((createdWine) => {
        if(!createdWine) {
            res.status(400).json({message: "Cannot create a new wine."})
        }else{
            res.status(201).json({data: createdWine, message: "Wine created"})
            console.log(createdWine) }
    })

}

//  UPDATE ROUTE
const updateWine = (req, res) => {
    db.Wine.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedWine) => {
        if(!updatedWine){
            res.status(400).json({Message: 'Could not update wine'})
        } else {
            res.status(200).json({Data: updatedWine, Message: "Wine updated"})
        }
    })
}

// DELETE ROUTE
const deleteWine = (req, res) => {
    db.Wine.findByIdAndDelete(req.params.id)
    .then((deletedWine) => {
        if(!deletedWine){
            res.status(400).json({Message: 'Could not delete wine'})
        } else {
            res.status(200).json({Data: deletedWine, Message: "Wine deleted"})
        }
    })
}


module.exports = {
    getWine,
    createWine,
    deleteWine,
    updateWine,
    getWineById
}