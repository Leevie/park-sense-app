// Require mongoose for model
let mongoose = require("mongoose");

// Schema for model
let Schema = mongoose.Schema;

// Define schema
let ParkReviewsSchema = new Schema({
    // Park id of the park associated with the review
    parkId: {
        type: Schema.Types.ObjectId,
        ref: "Park"
    },
    // User id of the individual who left the review
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    // Age of reviewer
    reviewAge: {
        type: Number,
        required: true
    },
    // Title of review
    title: {
        type: String,
        required: true
    },
    // Review description
    review: {
        type: String,
        required: true
    }
});

// Set up model
let ParkReviews = mongoose.model("ParkReviews", ParkReviewsSchema);

// Export
module.exports = ParkReviews;
