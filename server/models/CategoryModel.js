import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        validate: value => {
            if(value === "" || value.length <= 3){
                throw  new Error('Nom trop court')
            }
        }
    }
})

const CategoryModel = mongoose.model('category', CategorySchema);

export default CategoryModel;