// Dependencies
var express = require("express");
var mongojs = require("mongojs");

// Express router
var router = express.Router();

// Database configuration to use with mongojs
var databaseUrl = "parkdb";
var collection = ["parks"];

var db = mongojs(databaseUrl, collection);

// Log errors to console
db.on("error", function(err) {
    console.log("Database Error:", err);
});

// Get all parks
router.get("/api/parks", function(req, res) {
    db.parks.find({}, function(err, data) {
        if (err) {
            console.log("Error getting all parks:", err);
        } else {
            console.log("Getting all parks!");
            res.json(data);
        }
    });
});

// Get one park
router.get("/api/parks/:id", function(req, res) {
    db.parks.findOne({
        _id: mongojs.ObjectID(req.params.id)
    }, function(err, data) {
        if (err) {
            console.log("Error getting park id", req.params.id);
        } else {
            console.log("Retrieving Park ID:", req.params.id);
            res.json(data);
        }
    });
});

// Update park
router.put("/api/parks/:id", function(req, res) {
    var parkId = req.params.id;
    var bodyParkName = req.body.parkName;
    var bodyDescription = req.body.description;
    console.log("the whole body:", req.body);
    console.log("my update data:", bodyParkName, bodyDescription);
    db.parks.findAndModify({
        query: { _id: parkId },
        update: { $set: { parkName: bodyParkName, description: bodyDescription }}
    }, function(err, data, lastErrorObject) {
        if (err) {
            console.log("Error updating park id:", parkId, err);
        } else {
            console.log("Successfully updated park id:", parkId, data);
        }
    });
});

// Export for server to use
module.exports = router;
