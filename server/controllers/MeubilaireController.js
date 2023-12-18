import MeubilaireModel from "../models/MeubilaireModel.js";

export const createMeubilaire = async (req, res) => {
    const { name, material, category } = req.body
    const meubilaire = new MeubilaireModel(req.body);
    const meubilaireExist = await MeubilaireModel.findOne({email}.exec());

    if(meubilaireExist){
        res.status(403).send({error:true,message:'Ce meuble existe déjà'});
        return;
    }
}

export const getMeubilaires = async (req, res) => {
    const meubilaires = await MeubilaireModel.find();
}

export const getMeubilaire = async (req, res) => {
    const id = 'eaeazeaze'
    const meubilaire = await MeubilaireModel.findOne({id})
}