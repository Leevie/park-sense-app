const mongoose = require("mongoose");
const db = require("../models");

// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkdb", { useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI || "mongodb://seeder:mypassword123@ds111258.mlab.com:11258/heroku_2qb48p72", { useNewUrlParser: true });

// Park seeding
const parkSeed = [
    {
        parkName: "Como Regional Park",
        description: "Park with conservatory, zoo, gardens and pool",
        location: "St. Paul",
        age: 7,
        image: "",
        features: [],
        reviews: [],
        swings: "",
        slides: "",
        "monkey-bar": "",
        castle: ""
    },
    {
        parkName: "Lebanon Hills Regional Park",
        description: "Has multiple lakes, numerous hiking trails, and rec center",
        location: "Eagan",
        age: 5,
        image: "",
        features: [],
        reviews: [],
        swings: "",
        slides: "",
        "monkey-bar": "",
        castle: ""
    },
    {
        parkName: "Murphy-Hanrehan Park Reserve",
        description: "Popular destination for hiking, mountain biking and bird watching",
        location: "Prior Lake",
        age: 10,
        image: "",
        features: [],
        reviews: [],
        swings: "",
        slides: "",
        "monkey-bar": "",
        castle: ""
    },
    {
        parkName: "Hyland Lake Park Reserve - Recreation Area",
        description: "Huge park with elaborate playground and picnic area",
        location: "Bloomington",
        age: 2,
        image: "",
        features: [],
        reviews: [],
        swings: "",
        slides: "",
        "monkey-bar": "",
        castle: ""
    },
    {
        parkName: "Elm Creek Park Reserve",
        description: "5000 acres of hiking, swimming, and disc golf",
        location: "Elm Creek",
        age: 12,
        image: "",
        features: [],
        reviews: [],
        swings: "",
        slides: "",
        "monkey-bar": "",
        castle: ""
    }
];

// Remove Park then repopulate
db.Park
    .deleteMany({})
    .then(() => db.Park.collection.insertMany(parkSeed))
    .then(data => {
        console.log(`Park Records Inserted: ${data.result.n}`);
        process.exit(0);
    })
    .catch(err => {
        console.log(`Error inserting Park records: ${err}`);
        process.exit(1);
    });
