const Category = require("../models/categories");

const getCategories = (req, response) => {
  Category.findOne({})
    .then((categories) => response.json(categories))
    .catch((err) => response.sendStatus(500).send( err));
};

const setCategories = (req, response) => {
  const body = req.body;
  const category = new Category(body);
  category.save().then((categories) => response.json(categories));
};

const addCategories = (req, response) => {
    const id = req.params.id;
    const newCat = req.body;
    Category.findByIdAndUpdate(id, newCat, { new: true }).then( updatedCat=>{
        response.json(updatedCat)
    }

    )
}
module.exports = {  getCategories, setCategories, addCategories };