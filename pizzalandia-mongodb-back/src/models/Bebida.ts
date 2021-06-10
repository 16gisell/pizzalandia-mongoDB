// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
import mongose,{Schema, model} from 'mongoose'

const BebidaSchema =new Schema({
    nombreBebidas:{type:String},
    precioBebidas:{type:Number},
    contenido:{type:String},
    created_at:{type: Date, default:Date.now}
});

export default model('bebidas', BebidaSchema);