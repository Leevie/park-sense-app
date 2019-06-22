// Require mongoose
let mongoose = require("mongoose");

// Use Schema from mongoose
let Schema = mongoose.Schema;

// Define our schema
let UserSchema = new Schema({
    // First name
    firstName: {
        type: String,
        required: true
    },
    // Last Name
    lastName: {
        type: String,
        required: true
    },
    // Array of saved parks
    savedParks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Park"
        }
    ]
});

// Set up user using our model
let User = mongoose.model("User", UserSchema);

// Export User
module.exports = User;
