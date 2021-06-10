"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //para definir un enrutador
const ingredientesController_1 = __importDefault(require("../controller/ingredientesController"));
class IngredientesRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ingredientesController_1.default.ingredientes);
    }
}
const ingredientesRouter = new IngredientesRouter();
exports.default = ingredientesRouter.router;
