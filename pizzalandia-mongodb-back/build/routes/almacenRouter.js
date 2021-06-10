"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //para definir un enrutador
const almacenController_1 = __importDefault(require("../controller/almacenController"));
class AlmacenRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', almacenController_1.default.Mercancia);
    }
}
const almacenRouter = new AlmacenRouter();
exports.default = almacenRouter.router;
