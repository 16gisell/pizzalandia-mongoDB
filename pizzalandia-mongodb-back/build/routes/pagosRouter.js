"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const pagosController_1 = __importDefault(require("../controller/pagosController"));
class PagosRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pagosController_1.default.Pagos);
        this.router.get('/:id', pagosController_1.default.lispagos);
        this.router.post('/', pagosController_1.default.create);
        this.router.put('/:id', pagosController_1.default.updated);
        this.router.delete('/:id', pagosController_1.default.delete);
    }
}
const pagosRouter = new PagosRouter();
exports.default = pagosRouter.router;
