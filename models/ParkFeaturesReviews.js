// Require mongoose
let mongoose = require("mongoose");

// Schema
let Schema = mongoose.Schema;

// Define schema
let ParkFeaturesReviewsSchema = new Schema({
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
let ParkFeaturesReviews = mongoose.model("ParkFeaturesReviews", ParkFeaturesReviewsSchema);

// Export
module.exports = ParkFeaturesReviews;
