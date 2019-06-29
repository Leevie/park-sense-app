// Dependencies
var express = require("express");
var mongojs = require("mongojs");

// Express router
var router = express.Router();

// Database configuration to use with mongojs
var databaseUrl = "parkdb";
var collection = ["parkreviews"];

var db = mongojs(databaseUrl, collection);

// Log errors to console
db.on("error", function(err) {
    console.log("Database Error:", err);
});

// Get a single review for a park
router.get("/api/parkreviews/:id", function(req, res) {
    db.parkreviews.findOne({
        _id: mongojs.ObjectID(req.params.id)
    }, function(err, data) {
        if (err) {
            console.log("Error getting park reviews with id", req.params.id);
        } else {
            console.log("Retrieving Park Reviews for Id:", req.params.id);
            res.json(data);
        }
    });
});

// Get all reviews for a park
router.get("/api/parkreviews/all/:id", function(req, res) {
    db.parkreviews.find({
        parkId: mongojs.ObjectID(req.params.id)
    }, function(err, data) {
        if (err) {
            console.log("Error getting all park reviews with id", req.params.id);
        } else {
            console.log("Retrieving All Park Reviews for Id:", req.params.id);
            res.json(data);
        }
    });
});

// Get all reviews for a user
router.get("/api/parkreviews/user/:id", function(req, res) {
    db.parkreviews.find({
        userId: mongojs.ObjectID(req.params.id)
    }, function(err, data) {
        if (err) {
            console.log("Error getting park reviews for user with id", req.params.id);
        } else {
            console.log("Retrieving Park Reviews for User Id:", req.params.id);
            res.json(data);
        }
    });
});

// Create new review
router.post("/api/parkreviews/new", function(req, res) {
    var bodyParkId = req.body.parkId;
    var bodyUserId = req.body.userId;
    var bodyReviewAge = req.body.reviewAge;
    var bodyTitle = req.body.title;
    var bodyReview = req.body.review;
    // Create the park review
    db.parkreviews.save({
        parkId: bodyParkId,
        userId: bodyUserId,
        reviewAge: bodyReviewAge,
        title: bodyTitle,
        review: bodyReview
    }, function(err, saved) {
        if (err || !saved) {
            console.log("New park review not created!");
        } else {
            console.log("New park review created!");
        }
    });
    ////////////////////////////////////////
    // Link the park review back to the user
    ////////////////////////////////////////
})

// Export for server to use
module.exports = router;
