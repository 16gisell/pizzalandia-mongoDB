import {Router} from 'express'; //para definir un enrutador
import bebidasController from '../controller/bebidasController';

class BebidasRouter{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
      this.router.get('/', bebidasController.bebida);
      this.router.get('/:_id',bebidasController.lisbebida);

    }
}

const bebidasRouter = new BebidasRouter();
export default bebidasRouter.router;