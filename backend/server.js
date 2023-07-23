const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var userIdCounter = 1;
var forumIdCounter = 1;
const fakeDB = {
  users: [],
  forums: []
}

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/users", (req, res) => {
  const newUser = {
    id: userIdCounter,
    username: req.body.username
  };
  fakeDB.users.push(newUser);
  res.json(newUser);
  userIdCounter++;
});

app.get("/forums", (req, res) => {
  res.json(fakeDB.forums);
});

app.post("/forums", (req, res) => {
  const newForum = {...req.body, id: forumIdCounter, posts: []}
  fakeDB.forums.push(newForum);
  console.log(fakeDB);
  forumIdCounter++;
  res.json(newForum);
});

app.listen(port, () => console.log(`[Server]: Running on port ${port}`));
