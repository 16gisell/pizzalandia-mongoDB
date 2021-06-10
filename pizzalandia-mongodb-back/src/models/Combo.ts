// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
import mongose,{Schema, model} from 'mongoose'

const ComboSchema =new Schema({
    id:{type:Number},
    nameCombo:{type:String},
    imageCombo:{type:String},
    elementCombo:{type:String},
    precioCombo:{type:Number},
    created_at:{type: Date, default:Date.now}
});

export default model('combos', ComboSchema);