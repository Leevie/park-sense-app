const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
var passport = require("passport");
const users = require("./routes/api/user");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parkdb", { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});
