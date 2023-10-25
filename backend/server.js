const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const app = express();
const connectDB = require("./config/db.js");

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 3000;
app.listen(3000, console.log(`Server Started on PORT ${PORT}`));
