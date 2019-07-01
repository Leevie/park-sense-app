// Dependencies
var mongoose = require("mongoose");

// Park Features model
var parkFeaturesReviews = require("../models/parkfeaturesreviews");
module.exports = function (router) {
    // Get all features for the parks
    router.get("/api/parkfeaturesreviews", function (req, res) {
        parkFeaturesReviews.find({}, function (err, data) {
            if (err) {
                console.log("Error finding all park feature reviews:", err);
            } else {
                res.json(data);
            }
        });
    });

    // Get one feature
    router.get("/api/parkfeaturesreviews/:id", function (req, res) {
        parkFeaturesReviews.findById(req.params.id, function (err, data) {
            if (err) {
                console.log(`Error finding park feature review ${req.params.id}:`, err);
            } else {
                res.json(data);
            }
        });
    });

    // Add a park feature
    router.post("/api/parkfeaturesreviews", function (req, res) {
        var bodyParkId = req.body.parkId;
        var bodyUserId = req.body.userId;
        var bodyReviewAge = req.body.reviewAge;
        var bodyTitle = req.body.title;
        var bodyReview = req.body.review;
        parkFeaturesReviews.create({ parkId: mongoose.Types.ObjectId(bodyParkId), userId: mongoose.Types.ObjectId(bodyUserId), reviewAge: bodyReviewAge, title: bodyTitle, review: bodyReview }, function (err, data) {
            if (err) {
                console.log(`Error creating park feature review!`);
            } else {
                res.json(data);
            }
        });
    });
}
