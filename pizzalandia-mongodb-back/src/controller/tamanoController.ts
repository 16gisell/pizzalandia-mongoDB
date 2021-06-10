import {Request, Response} from 'express';
import tamanos from '../models/Tamano';

class TamanoController{

//listar una consulta de la base de datos mercancia
    public async tamano(req: Request, res: Response){//para listar todos
       const contenido = await tamanos.find()
       res.json(contenido)
    }

    public async create(req:Request, res:Response): Promise <void>{//para crear
      const Newfactura = new tamanos(req.body)
      await Newfactura.save(); //esto es el inserto y consulta con la base de datos
      res.json({message: 'guardado'});
  }
 }

const tamanoController = new TamanoController();
export default tamanoController;