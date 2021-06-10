"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //para definir un enrutador
const pizzaController_1 = __importDefault(require("../controller/pizzaController"));
class PizzaRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pizzaController_1.default.pizza);
        this.router.get('/:_id', pizzaController_1.default.listPizza);
    }
}
const pizzaRouter = new PizzaRouter();
exports.default = pizzaRouter.router;
