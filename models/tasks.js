const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  category: String,
  title: String,
  desc: String,
  importance: Number,
  status: String,
});

taskSchema.set("toJSON", {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Task", taskSchema);
