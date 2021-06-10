import {Request, Response} from 'express';
import ingredientesextra from '../models/Ingredientesextra';

class IngredientesController{

//listar una consulta de la base de datos mercancia
    public async ingredientes(req: Request, res: Response){//para listar todos
       const contenido = await ingredientesextra.find()
       res.json(contenido)
    }
 }

const ingredientesController = new IngredientesController();
export default ingredientesController;