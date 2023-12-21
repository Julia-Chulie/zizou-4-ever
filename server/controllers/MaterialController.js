import MaterialModel from "../models/MaterialModel.js"; 
import MaterialTypeModel from "../models/MaterialTypeModel.js"; 

 export const getMaterial = async (req, res) => {
    const {_id} = req.params;
    console.log('id: ' + id);
    
    const material = new MaterialModel(id);
 }

 export const getMaterials = async (req, res) => {
    const materials = await MaterialModel.find().populate('materialType')
  
    res.status(200).send(materials)

 }

 export const createMaterial = async (req,res) => {
  const {name , materialType, description} = req.body
  console.log(materialType);  

   const materials = await MaterialTypeModel.findOne({"_id":materialType})
   console.log('lalala',materials);
   if(!materials) {
      res.status(404).send("erreur ce materiel n'existe pas")
      return
   } 

    const material = new MaterialModel(req.body);
    material.materialType = materials
    material.name = name 
    material.description = description 
    await material.save()
    res.status(200).send(material)

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
    res.send(materialTypes)
}

export const getMaterialType = async (req, res) => {
    const {id} = req.params;
    const materialType = await MaterialTypeModel.find({"_id": id}.exec())
}