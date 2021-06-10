import {Request, Response} from 'express';
import pizzas from '../models/Pizza';

class PizzaController{

//listar una consulta de la base de datos mercancia
    public async pizza(req: Request, res: Response){//para listar todos
       const contenido = await pizzas.find();
       res.json(contenido)
    }
// //listar por individual 
    public async listPizza(req:Request, res:Response): Promise<any>{//para listar por uno
        const{idPizza} = req.params;
        const pago = await pizzas.findById(req.params._id);
        res.json(pago);
        res.status(404).json({text:"no existe"});
    }
 }

const pizzaController = new PizzaController();
export default pizzaController;