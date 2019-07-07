const mongoose = require("mongoose");
const db = require("../models");

// Connect to database
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkdb", { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || "mongodb://seeder:mypassword123@ds111258.mlab.com:11258/heroku_2qb48p72", { useNewUrlParser: true });

// Park feature seeding
const parkFeaturesReviewsSeed = [
    {
        parkId: null,
        userId: null,
        reviewAge: 6,
        title: "I like the monkey bars",
        review: "Very new and I like to play in the park"
    },
    {
        parkId: null,
        userId: null,
        reviewAge: 10,
        title: "Weeeeeee slide!!!",
        review: "The slide is a lot of fun!"
    },
    {
        parkId: null,
        userId: null,
        reviewAge: 11,
        title: "The cargo net is old",
        review: "Lots of broken strands and I fell down a lot"
    },
    {
        parkId: null,
        userId: null,
        reviewAge: 15,
        title: "My monkey bar reviews",
        review: "Very difficult but I like a challenge"
    },
    {
        parkId: null,
        userId: null,
        reviewAge: 9,
        title: "Slide is good",
        review: "Not crowded and there are lots of chances to slide down"
    }
]

// Remove park features and repopulate
db.ParkFeaturesReviews
    .deleteMany({})
    .then(() => db.ParkFeaturesReviews.collection.insertMany(parkFeaturesReviewsSeed))
    .then(data => {
        console.log(`Park Features Reviews Inserted: ${data.result.n}`);
        process.exit(0);
    })
    .catch(err => {
        console.log(`Error inserting park features reviews records: ${err}`);
        process.exit(1);
    });
