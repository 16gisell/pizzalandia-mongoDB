import {Router} from 'express'; //definir un enrutador
import userController from '../controller/userController';

class UserRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', userController.listUser);
        this.router.get('/:_id',userController.usuario); 
        this.router.post('/register',userController.crearUser);
        this.router.post('/',userController.logiar);
        this.router.put('/:_id',userController.actualizarUser) 
        this.router.delete('/:_id',userController.eliminarUser); 
    }

}
const userRouter = new UserRouter();
export default userRouter.router;