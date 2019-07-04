const router = require("express").Router();
const parkFeaturesController = require("../../controllers/parkFeaturesController");

// Matches with "/api/parkFeatures"
router.route("/")
  .get(parkFeaturesController.findAll)
  .post(parkFeaturesController.create);

// Matches with "/api/parkFeatures/:id"
router
  .route("/:id")
  .get(parkFeaturesController.findById)
  .put(parkFeaturesController.update)
  .delete(parkFeaturesController.remove);

module.exports = router;
