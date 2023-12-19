import UserModel from '../models/UserModel.js';
import { createToken } from '../utils/createToken.js';
import hashPassword  from '../utils/hashPassword.js';
import jsonwebToken from 'jsonwebtoken'
import {SECRET_KEY} from '../utils/const/constant.js'

export const getUserById = async (req,res) => {
    const {id} = req.params
    const user = await UserModel.findById(id).exec()
    if(!user){
        res.status(401).send("L'utilisatteur n'existe pas")
    }else{
        const userObject = {
            _id:user._id,
            lastname:user.lastname,
            firstname:user.firstname,
            email:user.email,
        }
        return res.status(200).json(userObject)
    }
}
export const getCurrentUser = async (req,res) => {
    const {token} = req.params
    console.log(req.params);
    const decodedToken = jsonwebToken.verify(token,SECRET_KEY);
    const user =await UserModel.findById(decodedToken._id).exec()
    console.log('user',user);
    if(!user){
        res.status(401).send("L'utilisatteur n'existe pas")
    }else{

        const userObject = {
            _id:user._id,
            lastname:user.lastname,
            firstname:user.firstname,
            email:user.email,
        }
        res.status(200).send(userObject);
    }
}

export const register = async (req,res) => {
    const { name , address ,siret} = req.body
    console.log(req.body);
    const user = new UserModel(req.body);
    const userExist = await UserModel.findOne({email}).exec();
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