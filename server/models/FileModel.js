import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    path :{
        type: String,
        required:true
    },
    originalname:{
        type:String,
        required:true
    },
    format:{
        type:String,
        required:true
    },
  });


  const FileModel = mongoose.model('file',FileSchema)

  export default FileModel;