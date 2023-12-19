import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
    name: {
        type: String,
         required: true,
         unique: true,
          minLength: 3 ,
          validate: value => {
        if(value ==="" || value.length <= 3){
            throw  new Error('Nom trop court')
        }
    }},
    description: {
        type: String,
        required: true,
        minLength: 10,
        validate: value => {
        if(value ==="" || value.length <= 10){
            throw  new Error('description trop court')
        }
    }},
    materialType: {
        type: {type: mongoose.Types.ObjectId,ref:'materialType'},
       
    }
})

const MaterialModel = mongoose.model('material', MaterialSchema);

export default MaterialModel;