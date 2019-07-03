// Dependencies
var mongoose = require("mongoose");

// Park model
var park = require("../models/park");
module.exports = function (router) {
    // Get all parks
    router.get("/api/parks", function (req, res) {
        park.find({}, function (err, data) {
            if (err) {
                console.log("Error finding all parks:", err);
            } else {
                res.json(data);
            }
        });
    });

    // Get one park
    router.get("/api/parks/:id", function (req, res) {
        park.findById(req.params.id, function (err, data) {
            if (err) {
                console.log(`Error finding park id ${req.params.id}:`, err);
            } else {
                res.json(data);
            }
        });
    });

    // Update park data
    router.put("/api/parks/:id", function (req, res) {
        var parkId = req.params.id;
        var bodyParkName = req.body.parkName;
        var bodyDescription = req.body.description;
        console.log("Body Data Received:", req.body);
        park.findByIdAndUpdate(req.params.id, {
            parkName: bodyParkName,
            description: bodyDescription
        }, { new: true, useFindAndModify: false }, function (err, data) {
            if (err) {
                console.log(`Error updating park id ${parkId}:`, err);
            } else {
                res.json(data);
            }
        });
    });

    // Add review to park
    router.put("/api/parks/addreview/:id", function (req, res) {
        park.findByIdAndUpdate(req.params.id, {
            $push: { reviews: mongoose.Types.ObjectId(req.body.id) }
        }, { new: true, useFindAndModify: false }, function (err, data) {
            if (err) {
                console.log(`Cannot add review to park id ${req.params.id}:`, err);
            } else {
                res.json(data);
            }
        });
    });

    // Add feature to park
    router.put("/api/parks/addfeature/:id", function (req, res) {
        park.findByIdAndUpdate(req.params.id, {
            $push: { features: mongoose.Types.ObjectId(req.body.id) }
        }, { new: true, useFindAndModify: false }, function (err, data) {
            if (err) {
                console.log(`Cannot add feature to park id ${req.params.id}:`, err);
            } else {
                res.json(data);
            }
        });
    });
}
