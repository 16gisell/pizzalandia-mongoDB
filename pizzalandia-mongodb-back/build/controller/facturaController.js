"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Factura_1 = __importDefault(require("../models/Factura"));
const configMensaje = require('../template/factura-template.js');
const facturar_template_1 = require("../template/facturar-template");
class FacturaController {
    //listar una consulta de la base de datos mercancia
    factura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contenido = yield Factura_1.default.find();
            res.json(contenido);
        });
    }
    // //listar por individual 
    listFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id } = req.params;
            const factu = yield Factura_1.default.findById(req.params._id);
            // if(factu.length>0){
            //     return res.json(factu[0]);
            // }
            res.json(factu);
            res.status(404).json({ text: "no existeeeeee" });
        });
    }
    //inserta en la base de datos.
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body); // para ejecutarlo desde el posman
            const { id, tipoMenu, Elementos, totalPago, tamanoPizza, ingredientesExtra, cantidad, Tipo_factura, lugar_pedido, codigo_pedido, codigo_entrega, name_usuario, correo, pago } = req.body;
            if (!req.body.correo) {
                res.status(401);
                res.json({ message: 'complete bien los datos del correo' });
            }
            if (!req.body.name_usuario) {
                res.status(401);
                res.json({ message: 'complete bien los datos del correo' });
            }
            else {
                const Newfactura = new Factura_1.default(req.body);
                yield Newfactura.save(); //esto es el inserto y consulta con la base de datos
                console.log(Newfactura, "Algoooo");
                facturar_template_1.server.enviaremail(Newfactura);
                res.json({ message: 'Pedido Facturado' }).json(Newfactura);
                // configMensaje.contact(Newfactura)
            }
        });
    }
    //actualizamos 
    updated(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Factura_1.default.findByIdAndUpdate(req.params._id, req.body);
            res.json({ text: 'actualizando' });
        });
    }
    //eliminamos elementos o datos de la base de datos    
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Factura_1.default.findByIdAndDelete(req.params._id);
            res.json({ text: 'eliminando' });
        });
    }
}
const facturaController = new FacturaController();
exports.default = facturaController;
