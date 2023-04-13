const router = require("express").Router();
// // getAllYards,
//   getYardById,
//   updateYard,
//   deleteYard,
// addYard,

const {
    getAllYards,
    getYardById,
    updateYard,
    deleteYard,
    addYard,
    
  } = require("../../controllers/yard-controller");

  router
  //   routes at root
      .route("/")
      .get(getAllYards)
      .post(addYard)
    

    //  Do I need this for the yard-routes?

    //   router
    //   // routes for login
    //   .route("/login")
    //   .post(loginUser)
      
      router
      //routes id code
      .route("/:id")
      .get(getYardById)
      .put(updateYard)
      .delete(deleteYard);
  
    
      module.exports = router;