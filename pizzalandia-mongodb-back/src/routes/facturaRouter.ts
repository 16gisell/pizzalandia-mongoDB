import {Router} from 'express'; //para definir un enrutador
import facturaController from '../controller/facturaController';

class FacturaRouter{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
      this.router.get('/', facturaController.factura);
      this.router.get('/:_id',facturaController.listFactura);
      this.router.post('/', facturaController.create);
      this.router.put('/:_id',facturaController.updated) 
      this.router.delete('/:_id',facturaController.delete); 
    }
}

const facturaRouter = new FacturaRouter();
export default facturaRouter.router;