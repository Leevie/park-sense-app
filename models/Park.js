// Require mongoose for model
let mongoose = require("mongoose");

// Use Schema from mongoose
let Schema = mongoose.Schema;

// Define our schema
let ParkSchema = new Schema({
    // Park name
    parkName: {
        type: String,
        required: true
    },
    // Park description
    description: {
        type: String,
        required: true
    },
    // Park location
    // Use the 'Point' GeoJSON object https://docs.mongodb.com/manual/reference/geojson/
    // Mongoose reference: https://mongoosejs.com/docs/geojson.html
    location: {
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    // Appropriate childrens age for park
    age: {
        type: Number,
        required: true
    },
    // Image of the park
    image: {
        type: Buffer,
        required: true
    },
    // Array of object ids containing park features
    features: [
        {
            type: Schema.Types.ObjectId,
            ref: "ParkFeatures"
        }
    ],
    // Array of object ids containing park reviews
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "ParkReviews"
        }
    ]
});

// Set up the park using our model
let Park = mongoose.model("Park", ParkSchema);

// Export the Park variable
module.exports = Park;
