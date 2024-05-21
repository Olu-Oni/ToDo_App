const Task = require("../models/tasks");

const getTask = (req, response) => {
  Task.find({})
    .then((tasks) => response.json(tasks))
    .catch((err) => response.sendStatus(500).send( err));
};

const addTask = (req, response) => {
  const body = req.body;
  const task = new Task(body);
  task.save().then((savedTask) => response.json(savedTask));
};

const removeTask = (req, response) => {
  const id = req.params.id;
  Task.findByIdAndDelete(id).then((removedTask) => response.json(removedTask));
};

const changeTask = (req, response) => {
  const changeID = req.params.id;
  const changeObj = req.body;
  Task.findByIdAndUpdate(changeID, changeObj, { new: true }).then((changedTask) => {
    console.log("changed task", changedTask);
    response.json(changedTask);
  });
};

module.exports = { getTask, addTask, removeTask, changeTask };
