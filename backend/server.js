require("dotenv").config();
const express = require('express');
const cors = require('cors');
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbName = "userDB";
const uri = `mongodb+srv://${process.env.URI_AUTH}@cluster0.5wemlrc.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri).then(() => {
  console.log("[Server]: Connected to database.");
}).catch(e => {
  console.log("[Server]: ERROR => Could not connect to database. " + e);
});

app.use(passport.initialize());

app.get('/loginapi', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`[Server]: Running on port ${port}.`);
});