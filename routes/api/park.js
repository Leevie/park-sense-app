const router = require("express").Router();
const parksController = require("../../controllers/parkController");

// Matches with "/api/parks"
router.route("/")
  .get(parksController.findAll)
  .post(parksController.create);

// Matches with "/api/parks/:id"
router
  .route("/:id")
  .get(parksController.findById)
  .put(parksController.update)
  .delete(parksController.remove);

module.exports = router;
