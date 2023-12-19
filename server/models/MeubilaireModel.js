import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MeubilaireSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLenght: 3,
        validate: value => {
        if(value ==="" || value.length <= 3){
            throw  new Error('Nom trop court')
        }
    }},
    material: [{
        type: mongoose.Types.ObjectId,
        ref: 'material',
        required: true,
    }],
    category: {
        type: {type: mongoose.Types.ObjectId,ref:'category'},
        
       
    },
})

const MeubilaireModel = mongoose.model('meubilaire', MeubilaireSchema);
export default MeubilaireModel;