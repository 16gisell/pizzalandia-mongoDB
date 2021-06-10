//solo para usar los elementos de mi base de datos en desarrollo
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config();
}
import express, {Application} from 'express';
// import './database';
import morgan from 'morgan';
import cors from 'cors';

//archivos de rutas
import indexRouter from './routes/indexRouter';
import userRouter from './routes/userRouter';
import pizzaRouter from './routes/pizzaRouter';
import bebidasRouter from './routes/bebidasRouter';
import ingredientesRouter from './routes/ingredientesRouter';
import tamanoRouter from './routes/tamanoRouter';
import comboRouter from './routes/comboRouter';
import facturaRouter from './routes/facturaRouter';
//definimos las clases del servidor, lo que nos permitira iniciar el servidor, 
class Server{
    
    public app: Application;

    constructor(){ //inicializara express
        this.app = express();
        
        require('./database');
        this.config();
        this.routes();
    }

    config(): void{//podrar configurar el metodo app
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev')); //la verificacion y respuesta del servidor y tiempo y peticion del cliente
        this.app.use(cors()); //pedir datos al servidor
        this.app.use(express.json()); //puede aceptar formatos json
        this.app.use(express.urlencoded({extended: false})) //si se desee enviar un correo desde un formulario html.
    }

    routes():void{ //configuramos la rutas de la app
        this.app.use('/',indexRouter);
        this.app.use('/api/user',userRouter);
        this.app.use('/api/pizza', pizzaRouter);
        this.app.use('/api/bebidas', bebidasRouter);
        this.app.use('/api/ingredientes', ingredientesRouter);
        this.app.use('/api/tamano', tamanoRouter);
        this.app.use('/api/combo', comboRouter);
        this.app.use('/api/facturas', facturaRouter);
     }

    start(): void{//inicializa el servidor es decir para ejecutar app.listen
        this.app.listen(this.app.get('port'), ()=>{
            console.log('server on port', this.app.get('port'));
        })//para que se quede escuchando
    }

    
}
const server = new Server();
server.start();
