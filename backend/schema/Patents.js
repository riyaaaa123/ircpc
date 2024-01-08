const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const committeeMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /\S+@\S+\.\S+/.test(value);
      },
      message: "Invalid email format",
    },
  },
  department: { type: String, required: true },
  approved: { type: Boolean, default: false },
  joined: { type: Boolean, default: false },
});
const patentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  fieldOfInvention: String,
  background: String,
  summary: String,
  drawings: [String], // Assuming an array of file paths or URLs for drawings
  detailedDescription: String,
  claims: {
    type: [String],
    required: true,
  },
  inventor: {
    name: String,
    background: String,
  },
  dateOfApplication: { type: Date, default: Date.now },
  status: { type: Boolean, default: false },
  references: [String],
  acknowledgments: String,
  committeeMembers: {
  type: [committeeMemberSchema],}
});

// Create a model based on the schema
const Patent = mongoose.model('Patent', patentSchema);

// Export the model
module.exports = Patent;
