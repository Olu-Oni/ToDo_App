const express = require("express");

const URL = `mongodb+srv://Olu:0n!yLulu@cluster0.apbbocc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const app = express();
// app.use(express.json())
const tasks = [
  {
    id: "3",
    category: "Home",
    title: "Task 3",
    desc: "Tasks related to physical or mental health.",
    importance: "Mid",
    status: "inProgress",
  },
  {
    id: "3383",
    category: "Work",
    title: "Task 5",
    desc: "something sha",
    imporatance: "Low",
    status: "inProgress",
  },
];

app.get("/api/tasks", (req, response) => {
  response.json(tasks);
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
