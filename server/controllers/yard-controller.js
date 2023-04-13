const {Yard} = require('../models')

const yardController = {


// CRUD for YARDS"
// code in yard-routes

// // getAllYards,
//   getYardById,
//   updateYard,
//   deleteYard,
// addYard

// Add New Yard (POST ROUTE api/etc....)
addYard({ params }, res){
    Yard.findOneAndUpdate(
      { _id: params.yardId },
      { $push: { yards: params.yardId } },
      { new: true, }
    )
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No Yards found with this id!" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.json(err));
    }

 // Delete Yard By ID
//  deleteYard({params}, res) {
//     Yard.findOneAndDelete({_id: params.id})
//     .then((dbData) => {
//         if (!dbData) {
//           res.status(404).json({ message: "No Yard found with this id!" });
//           return;
//         }
//         res.json(dbData);
//       })
//       .catch((err) => res.status(400).json(err));
//   }
}
 module.exports = yardController;