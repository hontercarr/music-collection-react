const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  genres: {
    type: String,
  },
  soundcloud: {
    type: String,
  },
});

//Export the model
module.exports = mongoose.model("Client", ClientSchema);
