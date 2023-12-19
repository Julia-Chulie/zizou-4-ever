import jwt from 'jsonwebtoken';
import UserModel from "../models/UserModel.js";
export const verifyToken = async (req, res, next) => {
    try {
        console.log('req.body=> ',req.headers.authorization);

        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decodedToken._id;
        const userExist = await UserModel.findOne({ _id: userId }).exec();
        if (userExist) {
            req.user = userExist;
            next();
        } else {
            return res.status(401).json({ message: 'Accès non autorisé, utilisateur non trouvé' });
        }
    } catch (error) {

        console.error('Erreur de vérification du token :', error.message);
        return res.status(401).json({ message: 'Accès non autorisé, token non valide' });
    }
};