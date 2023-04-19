//wines
const db = require("../models")
const Wine = require("../models/wine")
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



//Post Create Route to create a new entry when the new form is submitted
const createWine = (req,res) => {
    return db.Wine.create(req.body)
    .then((createdWine) => {
        if(!createdWine) {
            res.status(400).json({message: "Cannot create a new wine."})
        }else{
            res.status(201).json({data: createdWine, message: "Wine created"})
            console.log(createdWine) }
    })

}

//  UPDATE ROUTE to update information or rating for a wine
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
            console.log(deletedWine)
        } else {
            res.status(200).json({Data: deletedWine, Message: "Wine deleted"})
            console.log(deletedWine)
          }
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({Message: 'Server error'});
        });
        return;
    }

module.exports = {
    getWine,
    createWine,
    deleteWine,
    updateWine,

}