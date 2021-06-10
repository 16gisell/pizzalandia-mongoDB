// var Schema = mongoose.Schema;
import mongose,{Schema, model} from 'mongoose'
var bcrypt = require('bcryptjs');

const UsuarioSchema =new Schema({
    id:{type:Number},
    nombre:{type:String},
    apellido:{type:String},
    password:{type:String},
    created_at:{type: Date, default:Date.now}
});
UsuarioSchema.methods.encryptPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

UsuarioSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, password)
}

export default model('usuarios', UsuarioSchema);