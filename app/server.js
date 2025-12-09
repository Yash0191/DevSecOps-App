const express = require("express");
const mongoose = require("mongoose");
const app = express();

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/test";

mongoose.connect(MONGO_URL)

.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Mongo Error:", err));

app.get("/", (req, res) => {
  res.send("Secure DevSecOps App Running 🚀");
});

app.listen(3000, () => console.log("Server running on port 3000"));

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});
