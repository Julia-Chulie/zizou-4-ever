import CategoryModel from "../models/CategoryModel.js";

export const createCategory = async (req,res) => {
    const { name } = req.body
    console.log(name)
  try {
    const {name} = req.body
    const category =  new CategoryModel()
    category.name = name
   await category.save()
    res.send({category})
  } catch (error) {
    res.status(404).send({message:error})
  }
     
}

export const getCategories = async (req, res) => {
    const categories = await CategoryModel.find();
    res.status(200).send(categories)
}