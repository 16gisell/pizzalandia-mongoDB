import {Router} from 'express'; //para definir un enrutador
import pizzaController from '../controller/pizzaController';

class PizzaRouter{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
      this.router.get('/', pizzaController.pizza);
      this.router.get('/:_id',pizzaController.listPizza);

    }
}

const pizzaRouter = new PizzaRouter();
export default pizzaRouter.router;