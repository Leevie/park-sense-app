// Exporting an object containing all of our models
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const uri = "mongodb://localhost/parkdb" 

mongoose.connect(uri,{ useNewUrlParser: true }).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );


module.exports = mongoose.connection

// module.exports = {
//     Park: require("./park"),
//     ParkFeatures: require("./parkfeatures"),
//     ParkFeaturesReviws: require("./parkfeaturesreviews"),
//     ParkReviews: require("./parkreviews"),
//     User: require("./user")
// };