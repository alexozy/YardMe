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
    };
},

// GET ID
getUserById({ params}, res) {
    User.findOne ({ _id: params.id})
    // no user found error message
    .then((dbData)=> {

    })
}