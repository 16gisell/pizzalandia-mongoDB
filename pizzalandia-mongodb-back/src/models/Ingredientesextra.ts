// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
import mongose,{Schema, model} from 'mongoose'

const IngredientesESchema =new Schema({
    id_ingrediente:{type:Number},
    nombreIngrediente:{type:String},
    precioIngrediente:{type:Number},
    value:{type:String},
    created_at:{type: Date, default:Date.now}
});

export default model('ingredientesextra', IngredientesESchema);