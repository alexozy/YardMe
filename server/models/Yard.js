const {Yard} = require('../models')

const yardController = {

}
// CRUD for YARDS"

// Get All Yards
//  getAllYards
// Get Yards By ID
// Update Yard By ID

// Add New Yard (POST ROUTE api/etc....)
addFollower({ params }, res) {
    Yard.findOneAndUpdate(
      { _id: params.yardId },
      { $push: { yards: params.yardId } },
      { new: true, runValidators: true }
    )
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No Yards found with this id!" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.json(err));
  },

 // Delete Yard By ID

 module.exports = yardController