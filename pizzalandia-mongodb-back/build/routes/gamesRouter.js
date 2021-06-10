"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const gamesController_1 = __importDefault(require("../controller/gamesController"));
class GamesRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_1.default.games); //lista los juegos de la base de datos
        this.router.get('/:id', gamesController_1.default.listGames); //listar o solicitar un solo juego
        this.router.post('/', gamesController_1.default.create); //se usa para crear la rutas de nuevos datos que se desea agregar
        this.router.put('/:id', gamesController_1.default.updated); //actualizando datos
        this.router.delete('/:id', gamesController_1.default.delete); //eliminar un dato
    }
}
const gamesRouter = new GamesRouter();
exports.default = gamesRouter.router;
