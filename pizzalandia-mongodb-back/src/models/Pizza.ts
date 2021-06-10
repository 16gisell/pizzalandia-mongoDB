// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
import mongose,{Schema, model} from 'mongoose'

const PizzaSchema =new Schema({
    idPizza:{type:Number},
    nombrePizza:{type:String},
    ingredientesPizza:{type:String},
    precioCombo:{type:Number},
    created_at:{type: Date, default:Date.now}
});

export default model('pizzas', PizzaSchema);