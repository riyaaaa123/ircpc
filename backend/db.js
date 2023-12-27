const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://iprcell:adiiiitroorkee@cluster0.yvnce.mongodb.net/?retryWrites=true&w=majority"
const connectToMongo = ()=>{
mongoose.connect(mongoURI);
const db= mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
}

module.exports = connectToMongo;
