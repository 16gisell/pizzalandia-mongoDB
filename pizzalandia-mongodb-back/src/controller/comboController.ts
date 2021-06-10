import {Request, Response} from 'express';
import combos from '../models/Combo';

class ComboController{

//listar una consulta de la base de datos mercancia
    public async combo(req: Request, res: Response){//para listar todos
       const contenido = await combos.find()
       res.json(contenido)
    }
// //listar por individual 
    public async listCombo(req:Request, res:Response): Promise<any>{//para listar por uno
        const{id} = req.params;
        const pago = await combos.findById(req.params._id);
        // if(pago.length>0){
        //     return res.json(pago[0]);
        // }
        res.json(pago)
        res.status(404).json({text:"no existe"});
    }
 }

const comboController = new ComboController();
export default comboController;