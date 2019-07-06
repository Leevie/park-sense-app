const mongoose = require("mongoose");
const db = require("../models");

// Connect to database
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkdb", { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || "mongodb://seeder:mypassword123@ds111258.mlab.com:11258/heroku_2qb48p72", { useNewUrlParser: true });

// Data for park review
const parkReviewSeed = [
    {
        parkId: null,
        userId: null,
        reviewAge: 10,
        title: "My experience at the park!",
        review: "Very good equipment. I like the monkey bars!"
    },
    {
        parkId: null,
        userId: null,
        reviewAge: 12,
        title: "I like the swings",
        review: "Very good equipment and there weren't a lot of people at the park."
    },
    {
        parkId: null,
        userId: null,
        reviewAge: 9,
        title: "Lots of open space to run around!",
        review: "I play soccer so this park is perfect for me."
    },
    {
        parkId: null,
        userId: null,
        reviewAge: 7,
        title: "Did not enjoy",
        review: "All the kids were mean to me!"
    },
    {
        parkId: null,
        userId: null,
        reviewAge: 15,
        title: "Nice skateboard park",
        review: "Good amount of people. Kind of crowded."
    }
]

// Remove park features and repopulate
db.ParkReviews
    .deleteMany({})
    .then(() => db.ParkReviews.collection.insertMany(parkReviewSeed))
    .then(data => {
        console.log(`Park Review Records Inserted: ${data.result.n}`);
        process.exit(0);
    })
    .catch(err => {
        console.log(`Error inserting Park Review records: ${err}`);
        process.exit(1);
    });
