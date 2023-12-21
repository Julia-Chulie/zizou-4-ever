import MaterialModel from "../models/MaterialModel.js"; 
import MaterialTypeModel from "../models/MaterialTypeModel.js"; 

export const createMaterialType = async (req,res) => {
    const { name } = req.body
    console.log(name)
  try {
    const {name} = req.body
    const materialType =  new MaterialTypeModel()
    materialType.name = name
   await materialType.save()
    res.send({materialType})
  } catch (error) {
    res.status(404).send({message:error})
  }  
}

export const getMaterialTypes = async (req, res) => {
    const materialTypes = await MaterialTypeModel.find()
    res.send(materialTypes)
}

export const getMaterialType = async (req, res) => {
    const {id} = req.params;
    const materialType = await MaterialTypeModel.find({"_id": id}.exec())
}
