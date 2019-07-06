const mongoose = require("mongoose");
const db = require("../models");

// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkdb", { useNewUrlParser: true });

// Park feature seeding
const parkFeatureSeed = [
    {
        name: "Monkey Bars",
        description: "These are monkey bars",
        reviews: []
    },
    {
        name: "Swings",
        description: "These are swings",
        reviews: []
    },
    {
        name: "Jungle Gym",
        description: "This is jungle gym",
        reviews: []
    },
    {
        name: "Slide",
        description: "This is a slide",
        reviews: []
    },
    {
        name: "Cargo Net",
        description: "This is a cargo net",
        reviews: []
    }
]

// Remove park features and repopulate
db.ParkFeatures
    .deleteMany({})
    .then(() => db.ParkFeatures.collection.insertMany(parkFeatureSeed))
    .then(data => {
        console.log(`Park Features Records Inserted: ${data.result.n}`);
        process.exit(0);
    })
    .catch(err => {
        console.log(`Error inserting Park Feature records: ${err}`);
        process.exit(1);
    });
