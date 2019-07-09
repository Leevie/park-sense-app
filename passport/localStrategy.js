const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
    {
        usernameField: 'username'
    },
    function(username, password, done) {
        User.findOne({ username: username }, (err, user) => {
            if (err) {
                return done(err);
            } else if (!user) {
                return done(null, false, { message: "Incorrect user!" });
            } else if (!user.checkPassword(password)) {
                return done(null, false, { message: "Incorrect password!"});
            } else {
                return done(null, user);
            }
        });
    }
);

module.exports = strategy;
