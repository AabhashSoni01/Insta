const express = require("express");
const app = express();
let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/insta").then(() => {
  console.log("db...");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/upload", async (req, res) => {
  let { imgUrl } = req.body;
  if (!imgUrl) {
    return res.status(400).send("imgUrl is required");
  }
  let uploadD = new Upload({ imgUrl });
  await uploadD.save();
  return res.status(201).send("Upload successful");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

module.exports = app;
