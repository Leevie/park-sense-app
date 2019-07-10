/*

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const users = require("./routes/api/user");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkdb", { useNewUrlParser: true });

app.use(session({
	secret: "secret",
	store: new MongoStore({ 
		mongooseConnection: mongoose.connection,
		collection: "session"
	}),
	resave: false,
	saveUninitialized: false
}));

app.use(routes);

///////////// comment out this block here
app.use(session({
	store: new MongoStore({
		secret: "secret",
		mongooseConnection: mongoose.connection,
		collection: 'session'
	}),
	resave: false, //required
	saveUninitialized: false //required
}));
/////////////////////////////////////////

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Passport config
// require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.listen(PORT, function () {
	console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});

*/



const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const users = require("./routes/api/user");
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require('morgan')
const session = require('express-session')
const mongoStore = require('connect-mongo')(session)
const passport = require('./passport');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(morgan('dev'))
app.set('trust proxy', 1)
app.use(session({
	secret: "hi there",
	resave: false, //required
	saveUninitialized: true, //required
	store: new mongoStore({
		url: process.env.MONGODB_URI || "mongodb://localhost/parkdb",
		collection: 'session'
	})
}));

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use(routes);
app.use("/users", users);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkdb", { useNewUrlParser: true });

app.listen(PORT, function () {
	console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});
