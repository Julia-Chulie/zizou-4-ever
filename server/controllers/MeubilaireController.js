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
    if(!meubilaire) {
        res.status(403).send({error: true, message: 'Ce meuble n\'existe pas'});
    }else {
        res.status(200).send(meubilaire);
    }
}

export const getMeubilairesBySearch = async (req, res) => {
    console.log('okok');
    try {
        const { search } = req.query;

        console.log(search);

        const filter = search ? { category: search } : {};
        const meubilaires = await MeubilaireModel.find(filter).exec();

        if (meubilaires.length === 0) {
            return res.status(404).send({ error: true, message: 'Aucun meuble trouvé pour la recherche spécifiée' });
        }

        res.status(200).send(meubilaires);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: true, message: 'Erreur serveur lors de la recherche de meubles' });
    }
}

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