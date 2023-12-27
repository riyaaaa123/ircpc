const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
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
  references: [String],
  acknowledgments: String,
});

// Create a model based on the schema
const Patent = mongoose.model('Patent', patentSchema);

// Export the model
module.exports = Patent;
