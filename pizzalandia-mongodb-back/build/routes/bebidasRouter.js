"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //para definir un enrutador
const bebidasController_1 = __importDefault(require("../controller/bebidasController"));
class BebidasRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', bebidasController_1.default.bebida);
        this.router.get('/:_id', bebidasController_1.default.lisbebida);
    }
}
const bebidasRouter = new BebidasRouter();
exports.default = bebidasRouter.router;
