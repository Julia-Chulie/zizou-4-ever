import EnterpriseModel from '../models/EnterpriseModel.js';
import MaterialTypeModel from '../models/MaterialTypeModel.js';

export const createEnterprise = async (req,res) => {
    const { name , materialType, description} = req.body
    console.log(materialType);  

     const material = await MaterialTypeModel.findOne({"_id":materialType})
     console.log('lalala',material);
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