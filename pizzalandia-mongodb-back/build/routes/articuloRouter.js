"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //para definir un enrutador
const articuloController_1 = __importDefault(require("../controller/articuloController"));
class ArtuculoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', articuloController_1.default.Articulo);
    }
}
const artuculoRouter = new ArtuculoRouter();
exports.default = artuculoRouter.router;
