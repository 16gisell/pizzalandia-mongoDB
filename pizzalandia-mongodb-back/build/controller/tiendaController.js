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
const database_1 = __importDefault(require("../database"));
class TiendaController {
    //listar una consulta de la base de datos
    tienda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tienda = yield database_1.default.query('SELECT * FROM tienda');
            res.json(tienda);
        });
    }
    //listar por individual 
    listienda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tienda = yield database_1.default.query('SELECT * FROM tienda WHERE id = ?', [id]);
            if (tienda.length > 0) {
                return res.json(tienda[0]);
            }
            res.status(404).json({ text: "no existe" });
        });
    }
    //inserta en la base de datos.
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);// para ejecutarlo desde el posman 
            yield database_1.default.query('INSERT INTO tienda set ?', [req.body]); //esto es el inserto y consulta con la base de datos
            res.json({ message: 'guardado' });
        });
    }
    //actualizamos 
    updated(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tienda set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'actualizando' });
        });
    }
    //eliminamos elementos o datos de la base de datos    
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tienda WHERE id = ?', [id]);
            res.json({ text: 'eliminando' });
        });
    }
}
const tiendaController = new TiendaController();
exports.default = tiendaController;
