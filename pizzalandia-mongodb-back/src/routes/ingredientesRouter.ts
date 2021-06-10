import {Router} from 'express'; //para definir un enrutador
import ingredientesController from '../controller/ingredientesController';

class IngredientesRouter{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
      this.router.get('/', ingredientesController.ingredientes);

    }
}

const ingredientesRouter = new IngredientesRouter();
export default ingredientesRouter.router;