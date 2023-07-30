const { getDate, getTime } = require("./utilities/date.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 4000;

const http = require("http").Server(app);
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000"
  }
});

var userIdCounter = 1;
var forumIdCounter = 1;
const fakeDB = {
  users: [],
  forums: []
}

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

socketIO.on("connection", (socket) => {
  console.log(`[Server]: ${socket.id} just connected.`);

  socket.on("forumReply", (reply) => {
    fakeDB.forums.find(forum => {
      if (forum.id == reply.forumID) {
        forum.posts.push(reply);
      }
    });
    socketIO.emit("forumReplyUpdate/" + reply.forumID, reply);
  });

  socket.on("disconnect", () => {
    console.log("[Server]: A user disconnected");
  });
});

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
  const dateTime = getDate() + " " + getTime();
  const newForum = {...req.body, id: forumIdCounter, posts: [], dateCreated: dateTime};
  fakeDB.forums.push(newForum);
  forumIdCounter++;
  res.json({forumID: newForum.id});
});

app.get("/forum/:id", (req, res) => {
  res.json(fakeDB.forums.find(forum => req.params.id == forum.id));
});

http.listen(PORT, () => console.log(`[Server]: Running on port ${PORT}`));
