// Dependencies
var express = require("express");
var mongojs = require("mongojs");

// Express router
var router = express.Router();

// Database configuration to use with mongojs
var databaseUrl = "parkdb";
var collection = ["users"];

var db = mongojs(databaseUrl, collection);

// Log errors to console
db.on("error", function(err) {
    console.log("Database Error:", err);
});

// Get all users
router.get("/api/users", function(req, res) {
    db.users.find({}, function(err, data) {
        if (err) {
            console.log("Error getting all users:", err);
        } else {
            console.log("Getting all users!");
            res.json(data);
        }
    });
});

// Get one user
router.get("/api/users/:id", function(req, res) {
    db.users.findOne({
        _id: mongojs.ObjectID(req.params.id)
    }, function(err, data) {
        if (err) {
            console.log("Error getting user id", req.params.id);
        } else {
            console.log("Retrieving User ID:", req.params.id);
            res.json(data);
        }
    });
});

// Update user
router.put("/api/users/:id", function(req, res) {
    var userId = req.params.id;
    var userFirstName = req.body.firstName;
    var userLastName = req.body.lastName;
    console.log("the whole body:", req.body);
    console.log("my update data:", userFirstName, userLastName);
    db.users.findAndModify({
        query: { _id: userId },
        update: { $set: { firstName: userFirstName, lastName: userLastName }}
    }, function(err, data, lastErrorObject) {
        if (err) {
            console.log("Error updating user id:", userId, err);
        } else {
            console.log("Successfully updated user id:", userId, data);
        }
    });
});

// Export for server to use
module.exports = router;
