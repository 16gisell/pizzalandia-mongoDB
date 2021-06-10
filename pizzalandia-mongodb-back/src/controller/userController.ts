import {Request, Response} from 'express';
import usuarios from '../models/Usuario';

class UserController{

//listar una consulta de la base de datos
    public async listUser(req: Request, res: Response){//para listar todos
       const listUser = await usuarios.find()
       res.json(listUser)
    }
//listar por individual 
    public async usuario(req:Request, res:Response): Promise<any>{//para listar por uno
        const{id} = req.params;
        const user = await usuarios.findById(req.params._id);
        res.json(user);
        res.status(404).json({text:"no existe"});
    }

//inserta en la base de datos.
    public async crearUser(req:Request, res:Response): Promise<void>{//para crear
        const {nombre, password, apellido} = req.body;
        const userEmail = await usuarios.findOne({nombre:nombre})
        if(userEmail){
            res.status(404).send({error:"Este nombre ya existe"})
        }else{
            const NewUsuario = new usuarios({nombre, password, apellido})
            // userEmail.password = await userEmail.encryptPassword(password)
            await NewUsuario.save();
            res.send({message: "Registrado Usuario nuevo"})
        }   
            // res.json({message: 'guardado el usuario'});
    }

//actualizamos el jueg
    public async actualizarUser(req:Request, res:Response): Promise<void> {//para actualizar
        const {id}= req.params;
        await usuarios.findByIdAndUpdate(req.params._id, req.body)
        res.json({text: 'actualizando usuario'});

    }

//eliminamos elementos o datos de la base de datos    
    public async eliminarUser(req:Request, res:Response): Promise<void>{//para eliminar
        const {id}= req.params;
       await usuarios.findByIdAndDelete(req.params.id);
        res.json({text: 'eliminando el usuario'})
    }

//logiare usuario

    public async logiar(req:Request, res:Response){
        const {password, nombre} = req.body;
        const userEmail = await usuarios.findOne({nombre:nombre})
        res.send(userEmail)
        res.status(404).send({error: "La contraseña no es corrrecta"})
        
    }
}

const userController = new UserController();
export default userController;