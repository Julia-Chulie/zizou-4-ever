import MeubilaireModel from "../models/MeubilaireModel.js";
import MaterialModel from "../models/MaterialModel.js";
import CategoryModel from "../models/CategoryModel.js";
import FileModel from "../models/FileModel.js";
import path from 'path'

export const createMeubilaire = async (req, res) => {

  try {
    const { name, materials, category } = req.body;
  
    const cat = await CategoryModel.findOne({ '_id': category });
    if (!cat) {
      return res.status(400).send({ error: 'Erreur de catégorie' });
    }

    const matArray = [];

    for (const element of materials) {
      const mat = await MaterialModel.findOne({ '_id': element });
      if (!mat) {
        return res.status(400).send({ error: 'Erreur d\'élément' });
      }
      matArray.push(mat.name); 
    }

    if (!req.file) {
      return res.status(400).send({ error: 'Aucune image reçue' });
    }

    const fileExtension = path.extname(req.file.originalname);

    if (fileExtension !== '.jpg' && fileExtension !== '.png') {
      return res.status(400).send({ error: "Ce type de fichier n'est pas pris en compte" });
    }

    const file = new FileModel({
      originalname: req.file.filename,
      path: req.file.path,
      format: fileExtension, 
    });

    await file.save();

    const meubilaire = new MeubilaireModel({
      file: file,
      name,
      material: materials,
      category: cat._id
    });

    await meubilaire.save();

    const response = {
      _id: meubilaire._id,
      fileDoc: file,
      name:name,
      material: materials, 
      category: cat._id
    };

    res.status(201).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erreur lors de la création du meuble' });
  }
};

export const getMeubilaires = async (req, res) => {
    const meubilaires = await MeubilaireModel.find().populate("material").populate("category");
    res.status(200).send(meubilaires)
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
    try {
        const { search } = req.query;

        console.log(search);

        const filter = search ? { category: search } : {};
        const meubilaires = await MeubilaireModel.find(filter)

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

