// Connection to database
var connection = process.env.MONGODB_URI || "mongodb://localhost/parkdb"

// Export connection to be used for the controllers
module.exports = connection;
