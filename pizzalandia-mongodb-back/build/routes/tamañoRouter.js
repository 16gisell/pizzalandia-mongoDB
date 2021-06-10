"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //para definir un enrutador
const tama_oController_1 = __importDefault(require("../controller/tama\u00F1oController"));
class TamañoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tama_oController_1.default.tamaño);
    }
}
const tamañoRouter = new TamañoRouter();
exports.default = tamañoRouter.router;
