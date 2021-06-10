import {Request, Response} from 'express';
import facturas from '../models/Factura';
const configMensaje = require('../template/factura-template.js');
import {server} from '../template/facturar-template'

class FacturaController{

//listar una consulta de la base de datos mercancia
    public async factura(req: Request, res: Response){//para listar todos
       const contenido = await facturas.find()
       res.json(contenido)
    }
// //listar por individual 
    public async listFactura(req:Request, res:Response): Promise<any>{//para listar por uno
        const{id} = req.params;
        const factu = await facturas.findById(req.params._id);
        // if(factu.length>0){
        //     return res.json(factu[0]);
        // }
        res.json(factu);
        res.status(404).json({text:"no existeeeeee"});
    }

//inserta en la base de datos.
    public async create(req:Request, res:Response): Promise <void>{//para crear
        const {id, tipoMenu, Elementos, totalPago, tamanoPizza, ingredientesExtra, cantidad, Tipo_factura, lugar_pedido, codigo_pedido, codigo_entrega, name_usuario, correo, pago}=req.body
        if (!req.body.correo) {
            res.status(401);
            res.json({message: 'complete bien los datos del correo'})
        }
        if(!req.body.name_usuario){
            res.status(401);
            res.json({message: 'complete bien los datos del correo'})
        }
        else{
            const Newfactura = new facturas(req.body)
            await Newfactura.save(); //esto es el inserto y consulta con la base de datos
            server.enviaremail(Newfactura) 
            res.json({message: 'Pedido Facturado'}).json(Newfactura);  
            // configMensaje.contact(Newfactura)
            
        }      
    }

//actualizamos 
    public async updated(req:Request, res:Response): Promise<void> {//para actualizar
        await facturas.findByIdAndUpdate(req.params._id, req.body)
        res.json({text: 'actualizando'});

    }

//eliminamos elementos o datos de la base de datos    
    public async delete(req:Request, res:Response): Promise<void>{//para eliminar
        await facturas.findByIdAndDelete(req.params._id);
        res.json({text: 'eliminando'})
    }
 }

const facturaController = new FacturaController();
export default facturaController;