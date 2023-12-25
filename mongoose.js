require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MongoURL);
const db= mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
module.exports = mongoose;