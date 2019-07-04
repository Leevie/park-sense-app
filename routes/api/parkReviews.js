const router = require("express").Router();
const parkReviewsController = require("../../controllers/parkReviewsController");

// Matches with "/api/parkReviews"
router.route("/")
  .get(parkReviewsController.findAll)
  .post(parkReviewsController.create);

// Matches with "/api/parkReviews/:id"
router
  .route("/:id")
  .get(parkReviewsController.findById)
  .put(parkReviewsController.update)
  .delete(parkReviewsController.remove);

module.exports = router;
