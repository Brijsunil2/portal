require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const cors = require("cors");

const app = express();
const port = 4000;

const dbName = "portalDB";
const uri = `mongodb+srv://${process.env.URI_AUTH}@cluster0.5wemlrc.mongodb.net/${dbName}?retryWrites=true&w=majority`;

app.use(cors());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(uri).then(() => {
  console.log("[Server]: Connected to database.");
}).catch(e => {
  console.log("[Server]: ERROR => Could not connect to database. " + e);
});

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  googleId: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:4000/auth/google/callback",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id, username: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", {failureRedirect: "http://localhost:3000"}),
  (req, res) => res.redirect("http://localhost:3000")
);

app.listen(port, () => console.log(`[Server]: Listening on port ${port}.`));