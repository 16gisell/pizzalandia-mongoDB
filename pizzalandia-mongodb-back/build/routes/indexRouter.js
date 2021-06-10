"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //para definir un enrutador
const indexController_1 = require("../controller/indexController");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
