import EnterpriseModel from '../models/EnterpriseModel.js';
import MaterialTypeModel from '../models/MaterialTypeModel.js';

export const createEnterprise = async (req,res) => {
    const { name , materialType, description} = req.body


     const material = await MaterialTypeModel.findOne({"_id":materialType})

     if(!material) {
        res.status(404).send("erreur ce materiel n'existe pas")
        return
     } 

      const enterprise = new EnterpriseModel(req.body);
      enterprise.materialType = material
      enterprise.name = name 
      enterprise.description = description 
      await enterprise.save()
      res.status(200).send(enterprise)

}

export const getEnterprises = async (req, res) => {
    const enterprises = await EnterpriseModel.find()

    res.status(200).send(enterprises)
}

export const getEnterpriseByMaterialType = async (req, res) => {
    const {materialType} = req.params
    console.log("materialType" ,req.params);
    console.log(" req.params" ,req.params);
    const enterprise = await EnterpriseModel.find({"materialType":materialType})
    res.status(200).send(enterprise)
}