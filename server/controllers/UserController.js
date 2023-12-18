import UserModel from '../models/UserModel.js';
import { createToken } from '../utils/createToken.js';
import hashPassword  from '../utils/hashPassword.js';
import testRegister from '../utils/securityTest.js';

export const register = async (req,res) => {
    const { name , address ,siret} = req.body
    console.log(req.body);
    const user = new UserModel(req.body);
    const userExist = await UserModel.findOne({ email}).exec();
}

export const login = async (req,res) => {
        console.log(req.body);
    const {password,email} = req.body

    const user = await UserModel.findOne({email}).exec();

    if(!user || hashPassword(password) !== user.password){
        res.status(403).send({message:'Identifiants incorrects'});
    }else{console.log(user.role);
        const token = createToken(user._id,user.role,user.email);
        console.log(token)
        res.status(200).send({message:'Succès de la connexion',token:token});
    }
}