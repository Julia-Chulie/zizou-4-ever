import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MaterialTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        validate: value => {
            if(value ==="" || value.length <= 2){
                throw  new Error('Nom trop court')
            }
        }
    }
})

const MaterialTypeModel = mongoose.model('materialType', MaterialTypeSchema);
export default MaterialTypeModel;

