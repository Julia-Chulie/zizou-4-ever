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
    materials: {
        type: [{type: mongoose.Types.objectifId,ref:'material'}],
        required: true,
    },
    siret: {
        type: Number,
        required: true,
    },
})

const EnterpriseModel = mongoose.model('enterprise', EnterpriseSchema);

export default EnterpriseModel;