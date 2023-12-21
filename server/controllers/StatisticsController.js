import MeubilaireModel from "../models/MeubilaireModel.js";
import MaterialModel from "../models/MaterialModel.js";
import CategoryModel from "../models/CategoryModel.js";

export const getMeubilairesNumberByMaterial = async (req, res) => {
    const materials = await MaterialModel.find();
    const meubilairesNumberByMaterial = [];
    for (let i = 0; i < materials.length; i++) {
        const material = materials[i];
        const meubilaires = await MeubilaireModel.find({material:material._id})
        meubilairesNumberByMaterial.push({
            name:material.name,
            number:meubilaires.length
        })
    }
    res.status(200).send(meubilairesNumberByMaterial)
}

export const getMeubilairesNumberByCategory = async (req, res) => {
     const categories = await CategoryModel.find();
    const meubilairesNumberByCategory = [];
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const meubilaires = await MeubilaireModel.find({category:category._id})
        meubilairesNumberByCategory.push({
            name:category.name,
            number:meubilaires.length
        })
    }
    res.status(200).send(meubilairesNumberByCategory)
}