const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const users = require("./routes/api/user");
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require("./models/index");
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);
app.use(morgan('dev'))


// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use("/api/users", users);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkdb", { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});
