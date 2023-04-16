const router = require("express").Router();


const {
    getAllYards,
    getYardById,
    updateYard,
    deleteYard,
    addYard,

  } = require("../../controllers/yard-controller");

    router
      //routes at root
      .route("/")
      .get(getAllYards)
      .post(addYard)

    router
      //routes id code
      .route("/:id")
      .get(getYardById)
      .put(updateYard)
      .delete(deleteYard);


      module.exports = router;