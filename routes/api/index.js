const router = require("express").Router();

const parkRoutes = require("./park");
const parkFeaturesRoutes = require("./parkFeatures");
const parkFeaturesReviewsRoutes = require("./parkFeaturesReviews");
const parkReviewsRoutes = require("./parkReviews");
const userRoutes = require("./user");

// Park routes
router.use("/parks", parkRoutes);

// Park Features routes
router.use("/parkFeatures", parkFeaturesRoutes);

// Park Features Reviews routes
router.use("/parkFeaturesReviews", parkFeaturesReviewsRoutes);

// Park Reviews routes
router.use("/parkReviews", parkReviewsRoutes);

// User routes
router.use("/users", userRoutes);

module.exports = router;
