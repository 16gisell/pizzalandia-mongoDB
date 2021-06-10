import {Router} from 'express'; //para definir un enrutador
import {indexController} from '../controller/indexController';

class IndexRouter{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.index);
    }
}

const indexRouter = new IndexRouter();
export default indexRouter.router;