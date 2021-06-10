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
const Pizza_1 = __importDefault(require("../models/Pizza"));
class PizzaController {
    //listar una consulta de la base de datos mercancia
    pizza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contenido = yield Pizza_1.default.find();
            res.json(contenido);
        });
    }
    // //listar por individual 
    listPizza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPizza } = req.params;
            const pago = yield Pizza_1.default.findById(req.params._id);
            res.json(pago);
            res.status(404).json({ text: "no existe" });
        });
    }
}
const pizzaController = new PizzaController();
exports.default = pizzaController;
