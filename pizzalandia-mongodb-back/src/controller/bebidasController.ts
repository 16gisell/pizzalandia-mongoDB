import {Request, Response} from 'express';
// import pool from '../database';
import bebidas from '../models/Bebida';

class BebidasController{

//listar una consulta de la base de datos mercancia
    public async bebida(req: Request, res: Response){//para listar todos
        const contenido = await bebidas.find();
       res.json(contenido)
    }
//listar por individual 
    public async lisbebida(req:Request, res:Response): Promise<any>{//para listar por uno
        const{idBebidas} = req.params;
        const pago = await bebidas.findById(req.params._id);
        res.json(pago);
        res.status(404).json({text:"no existe"});
    }
 }

const bebidasController = new BebidasController();
export default bebidasController;