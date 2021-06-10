"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //para definir un enrutador
const comboController_1 = __importDefault(require("../controller/comboController"));
class ComboRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', comboController_1.default.combo);
        this.router.get('/:_id', comboController_1.default.listCombo);
    }
}
const comboRouter = new ComboRouter();
exports.default = comboRouter.router;
