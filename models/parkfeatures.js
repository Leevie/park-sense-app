// Require mongoose
let mongoose = require("mongoose");

// Use schema
let Schema = mongoose.Schema;

// Define schema
let ParkFeaturesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "ParkFeaturesReviews"
        }
    ]
});

// Set up useing our model
let ParkFeatures = mongoose.model("ParkFeatures", ParkFeaturesSchema);

// Export
module.exports = ParkFeatures;
