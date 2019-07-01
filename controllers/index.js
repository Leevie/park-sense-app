// Dependencies
var express = require("express");
var mongoose = require("mongoose");

// Connection
var conn = require("../config/connection");

// Express router
var router = express.Router();

// Connect to database
mongoose.connect(conn, { useNewUrlParser: true })

// Park Controller
var ParkController = require("./park_controller");
ParkController(router)

// Park Features Controller
var ParkFeaturesController = require("./park_features_controller");
ParkFeaturesController(router);

// Park Feature Reviews Controller
var ParkFeatureReviewsController = require("./park_features_reviews_controller");
ParkFeatureReviewsController(router);

// Park Reviews Controller

// User Controller

// Export the router
module.exports = router;
