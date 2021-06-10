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
const Tamano_1 = __importDefault(require("../models/Tamano"));
class TamanoController {
    //listar una consulta de la base de datos mercancia
    tamano(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contenido = yield Tamano_1.default.find();
            res.json(contenido);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body); // para ejecutarlo desde el posman 
            const Newfactura = new Tamano_1.default(req.body);
            yield Newfactura.save(); //esto es el inserto y consulta con la base de datos
            res.json({ message: 'guardado' });
        });
    }
}
const tamanoController = new TamanoController();
exports.default = tamanoController;
