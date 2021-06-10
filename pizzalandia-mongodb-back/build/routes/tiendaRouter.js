"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const tiendaController_1 = __importDefault(require("../controller/tiendaController"));
class TiendaRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tiendaController_1.default.tienda);
        this.router.get('/:id', tiendaController_1.default.listienda);
        this.router.post('/', tiendaController_1.default.create);
        this.router.put('/:id', tiendaController_1.default.updated);
        this.router.delete('/:id', tiendaController_1.default.delete);
    }
}
const tiendaRouter = new TiendaRouter();
exports.default = tiendaRouter.router;
