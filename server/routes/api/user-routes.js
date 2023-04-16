const router = require("express").Router();

const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  
  } = require("../../controllers/user-controller");

  const {
    createUser,
    loginUser,
  } = require ('../../controllers/signin-controllers');
  

  router
    //routes at root
    .route("/")
    .get(getAllUsers)
    .post(createUser)

    router
    // routes for login
    .route("/login")
    .post(loginUser)

    router
    //routes id code
    .route("/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


    module.exports = router;