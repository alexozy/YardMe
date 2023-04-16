const {Yard} = require('../models')

const yardController = {
 //get all users (GET /api/users)
 getAllYards (req, res){
    Yard.find ({})
    .then((dbData) => res.json(dbData))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
},

  //Get a yard by ID (GET /api/yard/:id)
getYardById ({ params }, res){
    Yard.findOne({ _id: params.id })
    // no user found error message below
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No Yard found with this id!" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //Add new yard to user's yard list (POST /api/users/:userId/Yard/:YardId)
  addYard({ params }, res) {
    Yard.findOneAndUpdate(
      { _id: params.userId },
      { $push: { Yard: params.yardId } },
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

   //Update a user by ID (PUT /api/yard/:id)
   updateYard({ params, body }, res) {
    //"runValidators:true" on PUT to ensure validation is ran on updates
    Yard.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No Yard found with this id!" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //Deletes a yard from a user's yard list (DELETE /api/users/:userId/follower/:followerId)
  deleteYard({ params }, res) {
    Yard.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { Yard: params.yardId } },
      { new: true, runValidators: true }
    )
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No Yard found with this id!" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.json(err));
  },


}
 module.exports = yardController;