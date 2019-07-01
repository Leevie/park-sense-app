const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));


// Use apiRoutes
var router = require("./controllers");
app.use(router);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});
