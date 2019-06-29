// Dependencies
var express = require("express");
var mongoose = require("mongoose");

// Connection
var conn = require("../config/connection");

// Express router
var router = express.Router();

// Connect to database
mongoose.connect(conn, { useNewUrlParser: true })

// Park model
var parkFeatures = require("../models/park_features");

// Get all features for the parks
router.get("/api/parkfeatures", function(req, res) {
    parkFeatures.find({}, function(err, data) {
        if (err) {
            console.log("Error finding all park features:", err);
        } else {
            res.json(data);
        }
    });
});

// Get one feature
router.get("/api/parkfeatures/:id", function(req, res) {
    parkFeatures.findById(req.params.id, function(err, data) {
        if (err) {
            console.log(`Error finding park feature ${req.params.id}:`, err);
        } else {
            res.json(data);
        }
    });
});

// Add a park feature
router.post("/api/parkfeatures", function(req, res) {
    var bodyName = req.body.name;
    var bodyDescription = req.body.description;
    parkFeatures.create({ name: bodyName, description: bodyDescription }, function(err, data) {
        if (err) {
            console.log(`Error creating park feature!`);
        } else {
            res.json(data);
        }
    });
});

// Export for server to use
module.exports = router;
