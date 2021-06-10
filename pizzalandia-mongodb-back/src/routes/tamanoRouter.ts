import {Router} from 'express'; //para definir un enrutador
import tamanoController from '../controller/tamanoController';

class TamanoRouter{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
      this.router.get('/', tamanoController.tamano);
      this.router.post('/', tamanoController.create);

    }
}

const tamanoRouter = new TamanoRouter();
export default tamanoRouter.router;