// var Schema = mongoose.Schema;
import mongose,{Schema, model} from 'mongoose'

const TamanopizzaSchema =new Schema({
    tipoTamano:{type:String},
    precioTamano:{type:Number},
    created_at:{type: Date, default:Date.now}
});

export default model('tamanos', TamanopizzaSchema);