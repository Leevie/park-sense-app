// Dependencies
var mongoose = require("mongoose");

// Park Features model
var parkFeatures = require("../models/parkfeatures");
module.exports = function (router) {
    // Get all features for the parks
    router.get("/api/parkfeatures", function (req, res) {
        parkFeatures.find({}, function (err, data) {
            if (err) {
                console.log("Error finding all park features:", err);
            } else {
                res.json(data);
            }
        });
    });

    // Get one feature
    router.get("/api/parkfeatures/:id", function (req, res) {
        parkFeatures.findById(req.params.id, function (err, data) {
            if (err) {
                console.log(`Error finding park feature ${req.params.id}:`, err);
            } else {
                res.json(data);
            }
        });
    });

    // Add a park feature
    router.post("/api/parkfeatures", function (req, res) {
        var bodyName = req.body.name;
        var bodyDescription = req.body.description;
        parkFeatures.create({ name: bodyName, description: bodyDescription, reviews: [] }, function (err, data) {
            if (err) {
                console.log(`Error creating park feature!`);
            } else {
                res.json(data);
            }
        });
    });
}
