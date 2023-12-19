import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EnterpriseSchema = new Schema({
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
        type: mongoose.Types.ObjectId,
        ref: 'materialtype'
    },
})

const EnterpriseModel = mongoose.model('enterprise', EnterpriseSchema);

export default EnterpriseModel;