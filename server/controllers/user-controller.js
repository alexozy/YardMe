const {User} = require('../models');
const userController = {
    // GET ALL
    getAllUsers (req, res){
        User.find ({})
        .then((dbData) => res.json(dbData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },


// GET ID
getUserById ({ params }, res){
    User.findOne({ _id: params.id })
    // no user found error message below
      .then((dbData) => {
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
}
module.exports = userController;