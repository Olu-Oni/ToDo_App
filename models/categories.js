const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  current: String,
  all: [String],
});

categorySchema.set("toJSON", {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Category", categorySchema);
