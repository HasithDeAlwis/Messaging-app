const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const app = express();
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();

connectDB();

app.use(express.json()); //to accept JSON data

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(3000, console.log(`Server Started on PORT ${PORT}`));
