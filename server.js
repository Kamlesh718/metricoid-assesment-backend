const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Card = require("./models/Card");

const app = express();
app.use(cors());
app.use(express.json());

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Connected to mongodb");
  } catch (err) {
    console.error("Faced some error while connecting to mongo", err.message);
  }
};

connectToDB();

app.get("/card", async (req, res) => {
  const card = await Card.find();
  res.status(200).json(card);
});

app.post("/card", async (req, res) => {
  console.log(req.body);
  const card = new Card(req.body);
  console.log(card);
  await card.save();
  res.status(201).json(card);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
