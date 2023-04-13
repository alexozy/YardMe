const router = require("express").Router();
// // getAllUsers,
//   getUserById,
//   updateUser,
//   deleteUser,
// addNewUser

const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    addNewUser,
    loginUser,
    
  } = require("../../controllers/user-controller");
// 
  router
//   routes at root
    .route("/")
    .get(getAllUsers)
    .post(addNewUser)
  
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
