const { User } = require("../models");

const userController = {
  //get all users (GET /api/users)
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //Get a user by ID (GET /api/users/:id)
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate("userYards")
      .then((dbData) => {
        // If no User is found, send 404
        if (!dbData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //Update a user by ID (PUT /api/users/:id)
  updateUser({ params, body }, res) {
    //"runValidators:true" on PUT to ensure validation is ran on updates
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //Delete a user by ID (DELETE /api/users/:id)
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.status(400).json(err));
  },

};

module.exports = userController;