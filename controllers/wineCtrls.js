//wines
const db = require("../models")
const Wine = require("../models/wine")
console.log(db)
//Route logic


// // SEED Route:
// const seedData = (req, res) => {
//     Wine.createWine([{ winery: "a", wine:"b", rating,average:"2", rating,review:"3", location:"c", id: "2000", image: "def"}], (err, data) => {
//         if (err) {
//             console.log(err, 'this is the error')
//             res.status(500).json({ error: 'Error seeding data' })
//         } else {
//             res.status(200).json({ message: 'Seed data created successfully' })
//         }
//     })
// }

// const seedData = async (req, res) => {
//     try {
//       const redWineResponse = await fetch("https://api.sampleapis.com/wines/reds");
//       const redWineData = await redWineResponse.json();
//       const whiteWineResponse = await fetch("https://api.sampleapis.com/wines/whites");
//       const whiteWineData = await whiteWineResponse.json();
//         const combinedWineData = [...redWineData, ...whiteWineData].map((wine, index) => {
//         return {
//           ...wine,
//           id: index + 1,
//         };
//       });
//         await Wine.insertMany(combinedWineData);
  
//       res.send("Database seeded successfully!");
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Error seeding database");
//     }
//   };

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


//Post Create Route
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
    // seedData,
}