const express = require("express");
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.static('dist'))


//mongoose connection
require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;
console.log(`Connecting to database...\n`);
mongoose
  .connect(url)
  .then((res) => console.log(`Connected to ${url}`))
  .catch((error) => console.log(`failed to connect ${error.message}`));
//

//model imports
const Category = require("./models/categories");
//

//controller imports
const taskController = require("./controllers/taskController");
const catController = require("./controllers/catController");
//

app.get("/api/tasks", taskController.getTask );
app.post("/api/tasks", taskController.addTask);
app.delete("/api/tasks/:id", taskController.removeTask);
app.put("/api/tasks/:id", taskController.changeTask);

app.post("/api/categories", catController.setCategories);
app.get("/api/categories", catController.getCategories );
app.put("/api/categories/:id", catController.addCategories)


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
