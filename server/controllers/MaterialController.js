import MaterialModel from "../models/MaterialModel.js"; 
import MaterialTypeModel from "../models/MaterialTypeModel.js"; 

 export const getMaterial = async (res, req) => {
    const {_id} = req.params;
    console.log('id: ' + id);
    
    const material = new MaterialModel(id);
    
 }

 export const getMaterials = async (res, req) => {
    const materials = await MaterialModel.find()
 }


 export const createMaterial = async (req,res) => {
    const { name , description ,type} = req.body
    console.log(req.body);
    
}

export const createMaterialType = async (req,res) => {
    const { name } = req.body
    console.log(name)
  try {
    const {name} = req.body
    const materialType =  new MaterialTypeModel()
    materialType.name = name
   await materialType.save()
    res.send({MaterialModel})


  } catch (error) {
    res.status(404).send({message:error})
  }
   
    
}

export const getMaterialTypes = async (req, res) => {
    const materialTypes = await MaterialTypeModel.find()
}

export const getMaterialType = async (req, res) => {
    const materialType = await MaterialTypeModel.find({id})
}