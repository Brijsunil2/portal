require('dotenv').config()
const { getDate, getTime } = require("./utilities/date.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

const http = require("http").Server(app);
const socketIO = require("socket.io")(http, {
  cors: {
    origin: process.env.ORIGIN_URL
  }
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const uri = process.env.DB_NAME_URI;
mongoose.connect(uri)
  .then(() => console.log("[Server]: Connected to mongo database."));

const userSchema = {
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String
};

const postSchema = {
  username: String,
  userID: Object,
  message: String,
  dateCreated: String
};

const forumSchema = {
  title: String,
  desc: String,
  userID: Object,
  creator: String,
  dateCreated: String,
  posts: [postSchema]
};

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
const Forum = mongoose.model("Forum", forumSchema);

socketIO.on("connection", (socket) => {
  console.log(`[Server]: ${socket.id} just connected.`);

  socket.on("forumReply", (reply) => {
    const message = new Post({
      username: reply.username,
      userID: reply.userID,
      message: reply.message,
      dateCreated: getDate() + " " + getTime()
    });

    Forum.findOne({_id: reply.forumID})
      .then(found => {
        found.posts.push(message);
        found.save();
        socketIO.emit("forumReplyUpdate/" + found._id, message);
      })
      .catch(e => console.log("[Server: Error]: Unable to find user forum => " + e));
  });

  socket.on("disconnect", () => {
    console.log("[Server]: A user disconnected");
  });
});

app.post("/signup", (req, res) => {
  User.findOne({email: req.body.email})
    .then((found) => {
      if (found) {
        res.json({error: "Email already exists"});
      } else {
        const newUser = new User({
          ...req.body, 
          username: req.body.firstname + " " + req.body.lastname,
          isAuth: true
        });
        newUser.save();
        res.json({
          id: newUser._id, 
          email: req.body.email, 
          username: req.body.firstname + " " + req.body.lastname,
          isAuth: true
        });
      }
    })
    .catch(e => {
      console.log("[Server]: Error when searching for user email. "+ e);
      res.json({error: "Server side error has occured. Please try again later."});
    });
});

app.post("/login1", (req, res) => {
  User.findOne({email: req.body.email})
  .then((found) => {
    if (found) {
      res.json({success: "Email exists"});
    } else {
      res.json({error: "Email does not exist"});
    }
  })
  .catch(e => {
    console.log("[Server]: Error when searching for user email. "+ e);
    res.json({error: "Server side error has occured. Please try again later."});
  });
});

app.post("/login2", (req, res) => {
  User.findOne({email: req.body.email, password: req.body.password})
  .then((found) => {
    if (found) {
      res.json({id: found._id, email: found.email, username: found.username, isAuth: true});
    } else {
      res.json({error: "The password entered was incorrect"});
    }
  })
  .catch(e => {
    console.log("[Server]: Error when searching for user email. "+ e);
    res.json({error: "Server side error has occured. Please try again later."});
  });
});

app.get("/forums", (req, res) => {
  Forum.find({})
    .then(found => res.json(found))
    .catch(e => console.log("[Server]: Unable to find any forums. " + e))
});

app.post("/forums", (req, res) => {
  const newForum = new Forum({
    ...req.body, 
    dateCreated: getDate() + " " + getTime(),
    posts: [], 
  });
  newForum.save()
    .catch(e => console.log("[Server: Error]: Unable to save new forum => " + newForum));

  res.json({forumID: newForum._id});
});

app.get("/forumsearch/:value", (req, res) => {
  const regex = new RegExp(req.params.value, 'i')
  Forum.find({title: {$regex: regex}})
  .then(found => res.json(found))
  .catch(e => console.log("[Server]: Unable to find any forums. " + e))
});

app.get("/forum/:id", (req, res) => {
  Forum.findOne({_id: req.params.id})
    .then(found => res.json(found))
    .catch(e =>  res.json({error: "Forum not Found"}));
});

http.listen(PORT, () => console.log(`[Server]: Running on port ${PORT}`));
