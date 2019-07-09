const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../models/user");

passport.serializeUser((user, done) => {
    console.log(`serializeUser called for user: ${user}`);
    console.log(`-------------------------------`);
    done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
    console.log(`deserializeUser called`);
    User.findOne(
        { _id: id }, 
        'username',
        (err, user) => {
            console.log(`Deserialize User: ${user}`);
            console.log(`----------------------------`);
            done(null, user);
        });
});

passport.use(LocalStrategy);

module.exports = passport;
