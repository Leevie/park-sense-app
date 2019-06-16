const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

app.use(express.static("client/build"));


// Use apiRoutes
app.post("/", (req, res) => {
  return res.json({yo: "I am some data"})
})


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});
