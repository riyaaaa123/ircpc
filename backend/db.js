require("dotenv").config();
const mongoose = require('mongoose');
const mongoURI = process.env.MongoURI;
const connectToMongo = ()=>{
mongoose.connect(mongoURI);
const db= mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
}

module.exports = connectToMongo;
