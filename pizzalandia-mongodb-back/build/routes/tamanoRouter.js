"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //para definir un enrutador
const tamanoController_1 = __importDefault(require("../controller/tamanoController"));
class TamanoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tamanoController_1.default.tamano);
        this.router.post('/', tamanoController_1.default.create);
    }
}
const tamanoRouter = new TamanoRouter();
exports.default = tamanoRouter.router;
