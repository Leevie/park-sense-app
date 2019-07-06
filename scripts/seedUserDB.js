const mongoose = require("mongoose");
const db = require("../models");

// Connect to database
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkdb", { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || "mongodb://seeder:mypassword123@ds111258.mlab.com:11258/heroku_2qb48p72", { useNewUrlParser: true });

// Park feature seeding
const userSeed = [
    {
        username: "peter@gmail.com",
        password: "824haf",
        savedParks: []
    },
    {
        username: "angela@gmail.com",
        password: "dahj398jh",
        savedParks: []
    },
    {
        username: "leevie34@gmail.com",
        password: "488jgan3i",
        savedParks: []
    },
    {
        username: "bryan@gmail.com",
        password: "38anhpadfbh4q",
        savedParks: []
    },
    {
        username: "dmitriy@gmail.com",
        password: "489aui3hfhv3wi",
        savedParks: []
    }
]

// Remove park features and repopulate
db.User
    .deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(`User Records Inserted: ${data.result.n}`);
        process.exit(0);
    })
    .catch(err => {
        console.log(`Error inserting user records: ${err}`);
        process.exit(1);
    });
