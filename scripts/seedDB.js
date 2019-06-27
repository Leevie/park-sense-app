const mongoose = require("mongoose");
const db = require("../models");

// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkdb", { useNewUrlParser: true });

// Park seeding
const parkSeed = [
    {
        parkName: "Como Regional Park",
        description: "Park with conservatory, zoo, gardens and pool",
        location: {
            type: "Point",
            coordinates: [44.978623, -93.149691]
        },
        age: 7,
        image: "",
        features: [],
        reviews: []
    },
    {
        parkName: "Lebanon Hills Regional Park",
        description: "Has multiple lakes, numerous hiking trails, and rec center",
        location: {
            type: "Point",
            coordinates: [44.778722, -93.164630]
        },
        age: 5,
        image: "",
        features: [],
        reviews: []
    },
    {
        parkName: "Murphy-Hanrehan Park Reserve",
        description: "Popular destination for hiking, mountain biking and bird watching",
        location: {
            type: "Point",
            coordinates: [44.715396, -93.332083]
        },
        age: 10,
        image: "",
        features: [],
        reviews: []
    },
    {
        parkName: "Hyland Lake Park Reserve - Recreation Area",
        description: "Huge park with elaborate playground and picnic area",
        location: {
            type: "Point",
            coordinates: [44.825491, -93.373868]
        },
        age: 2,
        image: "",
        features: [],
        reviews: []
    },
    {
        parkName: "Elm Creek Park Reserve",
        description: "5000 acres of hiking, swimming, and disc golf",
        location: {
            type: "Point",
            coordinates: [45.169404, -93.441118]
        },
        age: 12,
        image: "",
        features: [],
        reviews: []
    }
];

// Remove Park then repopulate
db.Park
    .deleteMany({})
    .then(() => db.Park.collection.insertMany(parkSeed))
    .then(data => {
        console.log(`Records Inserted: ${data.result.n}`);
        process.exit(0);
    })
    .catch(err => {
        console.log(`Error inserting Park records: ${err}`);
        process.exit(1);
    });
