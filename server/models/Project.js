const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

//Export the model
module.exports = mongoose.model("Project", ProjectSchema);
