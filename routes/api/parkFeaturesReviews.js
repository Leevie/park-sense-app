const router = require("express").Router();
const parkFeaturesReviewsController = require("../../controllers/parkFeaturesReviewsController");

// Matches with "/api/parkFeaturesReviews"
router.route("/")
  .get(parkFeaturesReviewsController.findAll)
  .post(parkFeaturesReviewsController.create);

// Matches with "/api/parkFeaturesReviews/:id"
router
  .route("/:id")
  .get(parkFeaturesReviewsController.findById)
  .put(parkFeaturesReviewsController.update)
  .delete(parkFeaturesReviewsController.remove);

module.exports = router;
